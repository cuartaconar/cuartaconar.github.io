// album.js - álbum optimizado con autorización e IndexedDB
(function () {
  'use strict';
  var galeria = document.getElementById('galeriaAlbum');
  var inputFotos = document.getElementById('inputFotos');
  var btnEditar = document.getElementById('btnEditarAlbum');
  var btnBloquear = document.getElementById('btnBloquearAlbum');
  var btnLimpiar = document.getElementById('btnLimpiar');
  var controles = document.getElementById('controlesAlbum');
  var modal = document.getElementById('modalAlbum');
  var fotoGrande = document.getElementById('fotoGrandeAlbum');
  var estrellasCont = document.getElementById('estrellasAlbum');
  var objectUrls = [];

  // Menos estrellas: suficiente para el efecto, mucho menos trabajo en móviles.
  for (var i = 0; i < 24; i++) {
    var star = document.createElement('span');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    estrellasCont.appendChild(star);
  }

  function unlocked() {
    return FamiliaSecurity.isUnlocked();
  }

  function refreshControls() {
    var ok = unlocked();
    if (btnEditar) btnEditar.hidden = ok;
    if (btnBloquear) btnBloquear.hidden = !ok;
    var addLabel = document.querySelector('.btn-agregar');
    if (addLabel) addLabel.hidden = !ok;
    if (btnLimpiar) btnLimpiar.hidden = !ok;
    galeria.querySelectorAll('.btn-borrar-foto').forEach(function (b) { b.hidden = !ok; });
  }

  function clearUrls() {
    objectUrls.forEach(function (url) { URL.revokeObjectURL(url); });
    objectUrls = [];
  }

  function migrateOldAlbum() {
    if (localStorage.getItem('albumFotosMigradoV2') === '1') return Promise.resolve();
    var old = [];
    try { old = JSON.parse(localStorage.getItem('albumFotos') || '[]'); } catch (e) { old = []; }
    if (!Array.isArray(old) || !old.length) {
      localStorage.setItem('albumFotosMigradoV2', '1');
      return Promise.resolve();
    }
    return Promise.all(old.map(function (src, idx) {
      if (typeof src !== 'string' || src.indexOf('data:image/') !== 0) return Promise.resolve();
      return fetch(src).then(function (r) { return r.blob(); }).then(function (blob) {
        return FamiliaSecurity.putPhoto('album:migrado:' + Date.now() + ':' + idx, blob);
      }).catch(function () {});
    })).then(function () {
      localStorage.removeItem('albumFotos');
      localStorage.setItem('albumFotosMigradoV2', '1');
    });
  }

  function render() {
    return FamiliaSecurity.getAllPhotos('album:').then(function (items) {
      clearUrls();
      galeria.innerHTML = '';
      if (!items.length) {
        galeria.innerHTML = '<div class="vacio-album">No hay fotos aún. Activa la edición para agregar imágenes 📸</div>';
        refreshControls();
        return;
      }
      items.sort(function (a, b) { return (a.updated || 0) - (b.updated || 0); });
      items.forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'foto-album';
        var img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        var url = URL.createObjectURL(item.blob);
        objectUrls.push(url);
        img.src = url;
        img.alt = 'Foto del álbum';
        var del = document.createElement('button');
        del.type = 'button';
        del.className = 'btn-borrar-foto';
        del.dataset.id = item.id;
        del.textContent = '✕';
        div.appendChild(img);
        div.appendChild(del);
        galeria.appendChild(div);
      });
      refreshControls();
    }).catch(function () {
      galeria.innerHTML = '<div class="vacio-album">No se pudo cargar el álbum en este navegador.</div>';
    });
  }

  btnEditar.addEventListener('click', function () {
    FamiliaSecurity.requireUnlock().then(function (ok) { if (ok) refreshControls(); });
  });
  btnBloquear.addEventListener('click', function () {
    FamiliaSecurity.lock();
    refreshControls();
  });

  inputFotos.addEventListener('change', function (e) {
    var files = Array.prototype.slice.call(e.target.files || []);
    e.target.value = '';
    if (!files.length) return;
    FamiliaSecurity.requireUnlock().then(function (ok) {
      if (!ok) return;
      var jobs = files.map(function (file, idx) {
        return FamiliaSecurity.compressImage(file, 1400, 0.78).then(function (blob) {
          return FamiliaSecurity.putPhoto('album:' + Date.now() + ':' + idx + ':' + Math.random().toString(36).slice(2), blob);
        });
      });
      return Promise.all(jobs).then(render);
    }).catch(function () { alert('No se pudieron guardar una o más imágenes.'); });
  });

  galeria.addEventListener('click', function (e) {
    var del = e.target.closest('.btn-borrar-foto');
    if (del) {
      e.stopPropagation();
      FamiliaSecurity.requireUnlock().then(function (ok) {
        if (!ok || !confirm('¿Quitar esta foto del álbum?')) return;
        FamiliaSecurity.deletePhoto(del.dataset.id).then(render);
      });
      return;
    }
    var photo = e.target.closest('.foto-album');
    if (!photo) return;
    var img = photo.querySelector('img');
    if (img) {
      fotoGrande.innerHTML = '';
      var big = document.createElement('img');
      big.src = img.src;
      big.alt = 'Foto ampliada';
      fotoGrande.appendChild(big);
      modal.classList.add('activo');
    }
  });

  btnLimpiar.addEventListener('click', function () {
    FamiliaSecurity.requireUnlock().then(function (ok) {
      if (!ok || !confirm('¿Borrar todas las fotos del álbum?')) return;
      FamiliaSecurity.getAllPhotos('album:').then(function (items) {
        return Promise.all(items.map(function (item) { return FamiliaSecurity.deletePhoto(item.id); }));
      }).then(render);
    });
  });

  modal.querySelector('.modal-cerrar').addEventListener('click', function () { modal.classList.remove('activo'); });
  modal.querySelector('.modal-fondo').addEventListener('click', function () { modal.classList.remove('activo'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') modal.classList.remove('activo'); });

  // Efecto de puntero solo en equipos con mouse; cero partículas táctiles.
  if (window.matchMedia && window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    var luz = document.createElement('div');
    luz.className = 'luz-seguidora';
    document.body.appendChild(luz);
    var contEstrellas = document.createElement('div');
    contEstrellas.className = 'contenedor-estrellitas';
    document.body.appendChild(contEstrellas);
    var mx = innerWidth / 2, my = innerHeight / 2, lx = mx, ly = my, last = 0;

    function sparkle(x, y) {
      var now = performance.now();
      if (now - last < 70) return;
      last = now;
      var el = document.createElement('div');
      el.className = 'estrellita-mouse';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.setProperty('--tx', (Math.random() - 0.5) * 120 + 'px');
      el.style.setProperty('--ty', (Math.random() - 0.5) * 120 + 'px');
      contEstrellas.appendChild(el);
      setTimeout(function () { el.remove(); }, 1000);
    }
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY; sparkle(mx, my);
    }, { passive: true });
    (function animate() {
      lx += (mx - lx) * 0.08;
      ly += (my - ly) * 0.08;
      luz.style.transform = 'translate3d(' + (lx - 250) + 'px,' + (ly - 250) + 'px,0)';
      requestAnimationFrame(animate);
    }());
  }

  migrateOldAlbum().then(render).catch(render);
  refreshControls();
}());
