/* seguridad.js - controles de edición y almacenamiento local seguro */
(function () {
  'use strict';

  var PASSWORD_HASH = 'bc83ca8cdaf75a55862cc725b1e3e8e37f96725acaca2fca6cd3f6f0d0be3526';
  var DB_NAME = 'familiaCuartaDB';
  var DB_VERSION = 1;

  function sha256(text) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
      return Array.from(new Uint8Array(buf)).map(function (b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }

  function askPassword() {
    return new Promise(function (resolve) {
      var overlay = document.createElement('div');
      overlay.className = 'seguridad-overlay';
      overlay.innerHTML =
        '<div class="seguridad-caja" role="dialog" aria-modal="true" aria-label="Autorización">' +
          '<div class="seguridad-icono">🔐</div>' +
          '<h2>Área protegida</h2>' +
          '<p>Ingresa la contraseña para modificar fotos.</p>' +
          '<input class="seguridad-input" type="password" autocomplete="current-password" inputmode="text" aria-label="Contraseña">' +
          '<div class="seguridad-acciones"><button type="button" class="seguridad-cancelar">Cancelar</button><button type="button" class="seguridad-aceptar">Entrar</button></div>' +
          '<p class="seguridad-error" aria-live="polite"></p>' +
        '</div>';
      document.body.appendChild(overlay);
      var input = overlay.querySelector('.seguridad-input');
      var error = overlay.querySelector('.seguridad-error');

      function close(ok) {
        overlay.remove();
        resolve(ok);
      }
      overlay.querySelector('.seguridad-cancelar').addEventListener('click', function () { close(false); });
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) close(false);
      });
      overlay.querySelector('.seguridad-aceptar').addEventListener('click', function () {
        sha256(input.value).then(function (hash) {
          if (hash === PASSWORD_HASH) {
            sessionStorage.setItem('familiaAdmin', '1');
            close(true);
          } else {
            error.textContent = 'Contraseña incorrecta.';
            input.value = '';
            input.focus();
          }
        });
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') overlay.querySelector('.seguridad-aceptar').click();
        if (e.key === 'Escape') close(false);
      });
      setTimeout(function () { input.focus(); }, 30);
    });
  }

  function isUnlocked() {
    return sessionStorage.getItem('familiaAdmin') === '1';
  }

  function requireUnlock() {
    if (isUnlocked()) return Promise.resolve(true);
    return askPassword();
  }

  function lock() {
    sessionStorage.removeItem('familiaAdmin');
  }

  function openDB() {
    return new Promise(function (resolve, reject) {
      if (!window.indexedDB) return reject(new Error('IndexedDB no disponible'));
      var request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = function () {
        var db = request.result;
        if (!db.objectStoreNames.contains('photos')) {
          db.createObjectStore('photos', { keyPath: 'id' });
        }
      };
      request.onsuccess = function () { resolve(request.result); };
      request.onerror = function () { reject(request.error); };
    });
  }

  function putPhoto(id, blob) {
    return openDB().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction('photos', 'readwrite');
        tx.objectStore('photos').put({ id: id, blob: blob, updated: Date.now() });
        tx.oncomplete = function () { db.close(); resolve(); };
        tx.onerror = function () { db.close(); reject(tx.error); };
      });
    });
  }

  function getPhoto(id) {
    return openDB().then(function (db) {
      return new Promise(function (resolve, reject) {
        var req = db.transaction('photos', 'readonly').objectStore('photos').get(id);
        req.onsuccess = function () {
          db.close();
          resolve(req.result ? req.result.blob : null);
        };
        req.onerror = function () { db.close(); reject(req.error); };
      });
    });
  }

  function deletePhoto(id) {
    return openDB().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction('photos', 'readwrite');
        tx.objectStore('photos').delete(id);
        tx.oncomplete = function () { db.close(); resolve(); };
        tx.onerror = function () { db.close(); reject(tx.error); };
      });
    });
  }

  function getAllPhotos(prefix) {
    return openDB().then(function (db) {
      return new Promise(function (resolve, reject) {
        var result = [];
        var req = db.transaction('photos', 'readonly').objectStore('photos').openCursor();
        req.onsuccess = function (e) {
          var cursor = e.target.result;
          if (!cursor) {
            db.close();
            resolve(result.filter(function (item) { return !prefix || item.id.indexOf(prefix) === 0; }));
            return;
          }
          result.push(cursor.value);
          cursor.continue();
        };
        req.onerror = function () { db.close(); reject(req.error); };
      });
    });
  }

  function compressImage(file, maxSide, quality) {
    maxSide = maxSide || 1200;
    quality = quality || 0.78;
    return new Promise(function (resolve, reject) {
      if (!file || !file.type || file.type.indexOf('image/') !== 0) {
        reject(new Error('El archivo no es una imagen.'));
        return;
      }
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error('No se pudo leer la imagen.')); };
      reader.onload = function () {
        var img = new Image();
        img.onload = function () {
          var scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
          var w = Math.max(1, Math.round(img.naturalWidth * scale));
          var h = Math.max(1, Math.round(img.naturalHeight * scale));
          var canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext('2d', { alpha: false });
          ctx.drawImage(img, 0, 0, w, h);
          canvas.toBlob(function (blob) {
            if (blob) resolve(blob);
            else reject(new Error('No se pudo comprimir la imagen.'));
          }, 'image/jpeg', quality);
        };
        img.onerror = function () { reject(new Error('La imagen no es válida.')); };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  window.FamiliaSecurity = {
    isUnlocked: isUnlocked,
    requireUnlock: requireUnlock,
    lock: lock,
    putPhoto: putPhoto,
    getPhoto: getPhoto,
    deletePhoto: deletePhoto,
    getAllPhotos: getAllPhotos,
    compressImage: compressImage
  };
}());
