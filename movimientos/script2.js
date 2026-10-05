// script2.js - FINAL CON ESTRELLITAS PARA FAMILIA.HTML - 4TA SECCION CONAR
const integrantes = [
    { nombre: "MONITOR: CASTILLO ALBARRACIN JOHAN SEBASTIAN", cedula: "1233888925", tel: "3212921188", correo: "Johan.castilloc@correo.policia.gov.co", edad: "29", sangre: "A+", frase: "Compromiso y lealtad con la institución.", imagen: "imagenes/1233888925.jpg" },
    { nombre: "GONZALEZ BELLO JULIETH KATERINE", cedula: "1054284195", tel: "3127849385", correo: "Jk.gonzale0002@correo.policia.gov.co", edad: "20", sangre: "O+", frase: "Con disciplina se construye el futuro.", imagen: "imagenes/1054284195.jpg" },
    { nombre: "HUERTAS HUERTAS DORIS ADRIANA", cedula: "1056612408", tel: "3115497044", correo: "Doris.huertas@correo.policia.gov.co", edad: "20", sangre: "O+", frase: "El servicio es mi vocación.", imagen: "imagenes/1056612408.jpg" },
    { nombre: "LEON SIMIJACA ESTEBAN DAVID", cedula: "1055126935", tel: "3213521758", correo: "esteban.leons@correo.policia.gov.co", edad: "20", sangre: "O+", frase: "Honor, valor y lealtad siempre.", imagen: "imagenes/1055126935.jpg" },
    { nombre: "LOMBANA ROMERO JUAN DIEGO", cedula: "1050950842", tel: "3234870657", correo: "juand.lombana@correo.policia.gov.co", edad: "20", sangre: "O+", frase: "Dignidad en cada paso.", imagen: "imagenes/1050950842.jpg" },
    { nombre: "MARCHENA MATEUS YORK ALEXANDER", cedula: "1024486798", tel: "3232999466", correo: "york.marchena@correo.policia.gov.co", edad: "19", sangre: "O+", frase: "Jóvenes, fuertes y valientes.", imagen: "imagenes/1024486798.jpg" },
    { nombre: "MARIN QUINTERO BREYNER MANUEL", cedula: "1107008842", tel: "3132528773", correo: "Breiner.marin@correo.policia.gov.co", edad: "19", sangre: "O+", frase: "La constancia vence todo.", imagen: "imagenes/1107008842.jpg" },
    { nombre: "MARIÑO PANQUEBA NICOLAS ESTIVEN", cedula: "1050604289", tel: "3115718807", correo: "nicolas.mario@correo.policia.gov.co", edad: "20", sangre: "O+", frase: "Unidad y fuerza en la familia.", imagen: "imagenes/1050604289.jpg" },
    { nombre: "MARQUEZ REYES JUAN SEBASTIAN", cedula: "1107846539", tel: "3209843215", correo: "juan.marquezr@correo.policia.gov.co", edad: "19", sangre: "O+", frase: "Fe, familia y servicio.", imagen: "imagenes/1107846539.jpg" },
    { nombre: "MARROQUIN SOLAR LEYNER STIVEN", cedula: "1032248038", tel: "3161712067", correo: "ls.marroquin@correo.policia.gov.co", edad: "21", sangre: "O+", frase: "Avanzar siempre, nunca retroceder.", imagen: "imagenes/1032248038.jpg" },
    { nombre: "MARTINEZ CARREÑO JUAN FELIPE", cedula: "1014480943", tel: "3208057708", correo: "martinez.j00189@correo.policia.gov.co", edad: "22", sangre: "O+", frase: "Disciplina es la clave.", imagen: "imagenes/1014480943.jpg" },
    { nombre: "MARTINEZ IBAÑEZ JONATAN SEBASTIAN", cedula: "1052837626", tel: "3108040036", correo: "martinez.j00251@policia.gov.co", edad: "21", sangre: "B+", frase: "Con el corazón en la misión.", imagen: "imagenes/1052837626.jpg" },
    { nombre: "MARTINEZ ROJAS FABIAN JOSE", cedula: "1051661536", tel: "3102935718", correo: "fj.martine00023@correo.policia.gov.co", edad: "19", sangre: "A+", frase: "Servir con honor.", imagen: "imagenes/1051661536.jpg" },
    { nombre: "MARTINEZ VARGAS YENY PATRICIA", cedula: "1051474040", tel: "3112074944", correo: "yeny.martinezv@correo.policia.gov.co", edad: "18", sangre: "O+", frase: "El inicio de una gran historia.", imagen: "imagenes/1051474040.jpg" },
    { nombre: "MELO MORENO CARLOS JULIO", cedula: "1057410309", tel: "3209745344", correo: "Carlos.melom@correo.policia.gov.co", edad: "21", sangre: "O+", frase: "Valentía y rectitud.", imagen: "imagenes/1057410309.jpg" },
    { nombre: "MENDIVELSO MORA JHONATAN ESTIVEN", cedula: "1002711400", tel: "3118706566", correo: "je.mendivelso@correo.policia.gov.co", edad: "24", sangre: "O+", frase: "Experiencia y dedicación.", imagen: "imagenes/1002711400.jpg" },
    { nombre: "MENJURA VILLAMIL KEVIN GERARDO", cedula: "1002526885", tel: "3137134097", correo: "kevin.menjura@correo.policia.gov.co", edad: "26", sangre: "O+", frase: "La lealtad no tiene precio.", imagen: "imagenes/1002526885.jpg" },
    { nombre: "MENZA TROCHEZ DILMER DANIEL", cedula: "1061498095", tel: "3218219691", correo: "dillmer.menza@correo.policia.gov", edad: "22", sangre: "O+", frase: "Firmeza en cada paso.", imagen: "imagenes/1061498095.jpg" },
    { nombre: "MOJICA FORERO FABIAN CAMILO", cedula: "1074344323", tel: "3046079006", correo: "fabian.mojicaf@correo.policia.gov.co", edad: "21", sangre: "O+", frase: "Con fe y valentía.", imagen: "imagenes/1074344323.jpg" },
    { nombre: "MONCALEANO GOMEZ JOSE LUIS", cedula: "1106395027", tel: "3209210169", correo: "jl.moncale00002@correo.policia.gov.co", edad: "19", sangre: "O+", frase: "Unidad, fuerza y esperanza.", imagen: "imagenes/1106395027.jpg" },
    { nombre: "MONTAÑA PEREZ CRISTIAN DANILO", cedula: "1051478186", tel: "3142838116", correo: "cd.montaa@correo.policia.gov.co", edad: "26", sangre: "O+", frase: "Dando lo mejor siempre.", imagen: "imagenes/1051478186.jpg" },
    { nombre: "MONTAÑEZ LIZARAZO DIEGO ALEJANDRO", cedula: "1057544552", tel: "3125451966", correo: "diego.montaezl@correo.policia.gov.co", edad: "21", sangre: "A+", frase: "Perseverancia y honor.", imagen: "imagenes/1057544552.jpg" },
    { nombre: "MONTENEGRO VILLALOBOS SERGIO ALEJANDRO", cedula: "1000185030", tel: "3153809807", correo: "sa.montenegro@correo.policia.gov.co", edad: "25", sangre: "O+", frase: "Compromiso con la patria.", imagen: "imagenes/1000185030.jpg" },
    { nombre: "MORALES CASTAÑEDA EDILBER", cedula: "1106393232", tel: "3229092202", correo: "Edilber.morales@correo.policia.gov.co", edad: "21", sangre: "A+", frase: "Servir es mi destino.", imagen: "imagenes/1106393232.jpg" },
    { nombre: "MORENO ALFONSO JYNETH NALLELY", cedula: "1002525706", tel: "3107895630", correo: "jyneth.moreno@correo.policia.gov.co", edad: "23", sangre: "A+", frase: "Dignidad y nobleza.", imagen: "imagenes/1002525706.jpg" },
    { nombre: "OTALORA BERNAL MYRIAM HELENA", cedula: "1002683007", tel: "3202870660", correo: "myriam.otalora@correo.policia.gov.co", edad: "23", sangre: "O+", frase: "Corazón y disciplina.", imagen: "imagenes/1002683007.jpg" },
    { nombre: "PEÑA MORALES JHON HENRY", cedula: "1005848987", tel: "3025951173", correo: "jhonh.pea@correo.policia.gov.co", edad: "23", sangre: "O+", frase: "Valentía que inspira.", imagen: "imagenes/1005848987.jpg" },
    { nombre: "PINEDA LARGO FABIAN ORLANDO", cedula: "1050605644", tel: "3106962590", correo: "fabian.pinedal@correo.policia.gov.co", edad: "19", sangre: "O+", frase: "El esfuerzo da frutos.", imagen: "imagenes/1050605644.jpg" },
    { nombre: "PINZON LOZANO RONALDO", cedula: "1105679860", tel: "3138201498", correo: "ronaldo.pinzon@correo.policia.gov.co", edad: "18", sangre: "O+", frase: "El futuro comienza hoy.", imagen: "imagenes/1105679860.jpg" },
    { nombre: "PRADA RUBIO FERNANDO", cedula: "1005854952", tel: "3133111295", correo: "fernando.pradar@correo.policia.gov.co", edad: "25", sangre: "A-", frase: "Vocación de servicio.", imagen: "imagenes/1005854952.jpg" },
    { nombre: "RAMIREZ DAZA ANGELA YOHANA", cedula: "1007141041", tel: "3216355797", correo: "angela.ramirezd@correo.policia.gov.co", edad: "23", sangre: "B+", frase: "Fuerza y delicadeza.", imagen: "imagenes/1007141041.jpg" },
    { nombre: "RENDON PEÑA MANUEL SANTIAGO", cedula: "1193279190", tel: "3143194973", correo: "Manuel.rendonp@correo.policia.gov.co", edad: "24", sangre: "B+", frase: "Con paso firme.", imagen: "imagenes/1193279190.jpg" },
    { nombre: "RISCANEVO SILVA DANNA VALENTINA", cedula: "1052840597", tel: "3223715635", correo: "Danna.riscanevo@correo.policia.gov.co", edad: "18", sangre: "O+", frase: "Joven, valiente y decidida.", imagen: "imagenes/1052840597.jpg" },
    { nombre: "RODRIGUEZ SOLERA ANGEL YESID", cedula: "1007196394", tel: "3134218693", correo: "ay.rodrigu00016@correo.policia.gov.co", edad: "27", sangre: "O+", frase: "Experiencia y lealtad.", imagen: "imagenes/1007196394.jpg" },
    { nombre: "ROJAS GARZON KAREN CRISTINA", cedula: "1058274551", tel: "3107834283", correo: "karenc.rojas@correo.policia.gov.co", edad: "18", sangre: "O+", frase: "Brillando con luz propia.", imagen: "imagenes/1058274551.jpg" },
    { nombre: "ROJAS PEREZ MAYCOL ANDREY", cedula: "1057981115", tel: "3226470812", correo: "maycol.rojas@correo.policia.gov.co", edad: "17", sangre: "O+", frase: "El camino recién comienza.", imagen: "imagenes/1057981115.jpg" },
    { nombre: "ROJAS SUAREZ JOHAN ANDREDY", cedula: "1109415532", tel: "3134487600", correo: "johan.rojas0005@correo.policia.gov.co", edad: "18", sangre: "O+", frase: "Con entusiasmo y valor.", imagen: "imagenes/1109415532.jpg" },
    { nombre: "RONDON MEDINA LAURA DANIELA", cedula: "1051068195", tel: "3166210770", correo: "laura.rondonm@correo.policia.gov.co", edad: "18", sangre: "O+", frase: "Dulzura y firmeza.", imagen: "imagenes/1051068195.jpg" },
    { nombre: "SANCHEZ SANTIAGO STEVEN", cedula: "1000708216", tel: "3238966601", correo: "Steven.sanxhezs@correo.policia.gov.co", edad: "24", sangre: "O+", frase: "Perseverancia todo lo alcanza.", imagen: "imagenes/1000708216.jpg" },
    { nombre: "SANCHEZ ALVARADO DAVID SAMIR", cedula: "1070596740", tel: "3125460226", correo: "ds.sanchez00007@correo.policia.gov.co", edad: "19", sangre: "O+", frase: "Con paso seguro.", imagen: "imagenes/1070596740.jpg" },
    { nombre: "SANDOVAL PATERNINA JUAN DAVID", cedula: "1021512937", tel: "3009794212", correo: "jd.sandova00010@correo.policia.gov.co", edad: "21", sangre: "O+", frase: "Orgullo de pertenecer.", imagen: "imagenes/1021512937.jpg" }
];

document.addEventListener('DOMContentLoaded', function() {
    // ESTRELLITAS FIJAS - FUNCIONA EN INDEX Y FAMILIA
    var estrellasCont = document.querySelector('.estrellas') || document.getElementById('estrellasFamilia');
    if (estrellasCont) {
        var cantidad = estrellasCont.id === 'estrellasFamilia' ? 28 : 24;
        for (var i = 0; i < cantidad; i++) {
            var s = document.createElement('span');
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = Math.random() * 3 + 's';
            s.style.animationDuration = (2 + Math.random() * 2) + 's';
            estrellasCont.appendChild(s);
        }
    }

    // BOTON INICIAR
    var boton = document.getElementById('botonIniciar');
    if (boton) {
        boton.addEventListener('click', function() {
            boton.style.transform = 'scale(0.9)';
            setTimeout(function() { window.location.href = 'familia.html'; }, 300);
        });
    }

    // FAMILIA - TARJETAS
    var contenedor = document.getElementById('contenedorTarjetas');
    if (contenedor) {
        contenedor.innerHTML = '';
        for (var j = 1; j < integrantes.length; j++) {
            var p = integrantes[j];
            var div = document.createElement('div');
            div.className = 'tarjeta-estudiante';
            div.dataset.sangre = p.sangre;
            div.dataset.cedula = p.cedula;
            div.innerHTML =
                '<div class="foto-tarjeta"><img class="foto-personal" src="' + p.imagen + '" alt="' + p.nombre.replace(/"/g, '&quot;') + '" loading="lazy"><span class="foto-placeholder" aria-hidden="true">👤</span></div>' +
                '<div class="controles-foto-personal" hidden>' +
                  '<button type="button" class="btn-foto-personal btn-cambiar-foto">📷 Cambiar</button>' +
                  '<button type="button" class="btn-foto-personal btn-quitar-foto">🗑 Quitar</button>' +
                  '<input class="input-foto-personal" type="file" accept="image/*" hidden>' +
                '</div>' +
                '<h3>' + p.nombre + '</h3><p><strong>Cédula:</strong> ' + p.cedula + '</p><p><strong>Tel:</strong> ' + p.tel + '</p><p><strong>Correo:</strong> ' + p.correo + '</p><p><strong>Edad:</strong> ' + p.edad + ' años</p><p><strong>Sangre:</strong> ' + p.sangre + '</p><p class="frase-personal">"' + p.frase + '"</p>';
            contenedor.appendChild(div);
            (function(d, idx) { setTimeout(function() { d.classList.add('activa'); }, Math.min(idx * 25, 600)); })(div, j);
        }

        function setPhoto(card, blob) {
            var img = card.querySelector('.foto-personal');
            var placeholder = card.querySelector('.foto-placeholder');
            if (img.dataset.objectUrl) URL.revokeObjectURL(img.dataset.objectUrl);
            if (blob) {
                var url = URL.createObjectURL(blob);
                img.src = url;
                img.dataset.objectUrl = url;
                img.style.display = 'block';
                placeholder.style.display = 'none';
            } else {
                var person = integrantes.find(function (x) { return x.cedula === card.dataset.cedula; });
                img.removeAttribute('src');
                if (person) img.src = person.imagen;
                img.style.display = 'block';
                placeholder.style.display = 'none';
                img.onerror = function () { img.style.display = 'none'; placeholder.style.display = 'flex'; };
            }
        }

        // Recuperar fotos personales guardadas en el navegador.
        if (window.FamiliaSecurity) {
            Array.prototype.slice.call(contenedor.querySelectorAll('.tarjeta-estudiante')).forEach(function (card) {
                FamiliaSecurity.getPhoto('personal:' + card.dataset.cedula).then(function (blob) {
                    if (blob) setPhoto(card, blob);
                    else {
                        var img = card.querySelector('.foto-personal');
                        img.onerror = function () {
                            img.style.display = 'none';
                            card.querySelector('.foto-placeholder').style.display = 'flex';
                        };
                    }
                }).catch(function () {});
            });
        }

        function refreshAdminButtons(unlocked) {
            document.querySelectorAll('.controles-foto-personal').forEach(function (el) { el.hidden = !unlocked; });
            var lock = document.getElementById('btnBloquearPersonal');
            var edit = document.getElementById('btnEditarPersonal');
            if (lock) lock.hidden = !unlocked;
            if (edit) edit.hidden = unlocked;
        }

        var btnEditPersonal = document.getElementById('btnEditarPersonal');
        var btnLockPersonal = document.getElementById('btnBloquearPersonal');
        if (btnEditPersonal) {
            btnEditPersonal.addEventListener('click', function () {
                FamiliaSecurity.requireUnlock().then(function (ok) { if (ok) refreshAdminButtons(true); });
            });
        }
        if (btnLockPersonal) {
            btnLockPersonal.addEventListener('click', function () {
                FamiliaSecurity.lock();
                refreshAdminButtons(false);
            });
        }

        contenedor.addEventListener('click', function (e) {
            var card = e.target.closest('.tarjeta-estudiante');
            if (!card || !FamiliaSecurity) return;
            if (e.target.classList.contains('btn-cambiar-foto')) {
                FamiliaSecurity.requireUnlock().then(function (ok) {
                    if (ok) card.querySelector('.input-foto-personal').click();
                });
            }
            if (e.target.classList.contains('btn-quitar-foto')) {
                FamiliaSecurity.requireUnlock().then(function (ok) {
                    if (!ok) return;
                    if (!confirm('¿Quitar la foto de este integrante?')) return;
                    FamiliaSecurity.deletePhoto('personal:' + card.dataset.cedula).then(function () {
                        setPhoto(card, null);
                    });
                });
            }
        });

        contenedor.addEventListener('change', function (e) {
            if (!e.target.classList.contains('input-foto-personal')) return;
            var file = e.target.files && e.target.files[0];
            e.target.value = '';
            var card = e.target.closest('.tarjeta-estudiante');
            if (!file || !card) return;
            FamiliaSecurity.requireUnlock().then(function (ok) {
                if (!ok) return;
                return FamiliaSecurity.compressImage(file, 1100, 0.78).then(function (blob) {
                    return FamiliaSecurity.putPhoto('personal:' + card.dataset.cedula, blob).then(function () {
                        setPhoto(card, blob);
                    });
                });
            }).catch(function () { alert('No se pudo guardar la foto.'); });
        });

        refreshAdminButtons(FamiliaSecurity && FamiliaSecurity.isUnlocked());

        // Buscador
        var buscador = document.getElementById('buscador');
        if (buscador) {
            buscador.addEventListener('input', function(e) {
                var t = e.target.value.toLowerCase();
                document.querySelectorAll('.tarjeta-estudiante').forEach(function(card) {
                    card.style.display = card.textContent.toLowerCase().includes(t)? '' : 'none';
                });
            });
        }
        // Filtros
        document.querySelectorAll('.filtro-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filtro-btn').forEach(function(b) { b.classList.remove('activo'); });
                btn.classList.add('activo');
                var f = btn.dataset.filtro;
                document.querySelectorAll('.tarjeta-estudiante').forEach(function(card) {
                    if (f === 'todos') card.style.display = '';
                    else card.style.display = card.dataset.sangre === f? '' : 'none';
                });
            });
        });

        // Preloader y contador
        var pre = document.getElementById('preloader');
        var cont = document.getElementById('contador');
        if (pre) {
            setTimeout(function() {
                pre.classList.add('oculto');
                // Confeti
                var colores = ['#FF6B00', '#FFB347', '#FFD700', '#CC5500'];
                for (var k = 0; k < 35; k++) {
                    var cf = document.createElement('div');
                    cf.className = 'confeti';
                    cf.style.left = Math.random() * 100 + '%';
                    cf.style.background = colores[Math.floor(Math.random() * colores.length)];
                    cf.style.animationDelay = Math.random() + 's';
                    cf.style.animationDuration = (2 + Math.random() * 2) + 's';
                    document.body.appendChild(cf);
                    (function(c) { setTimeout(function() { c.remove(); }, 4000); })(cf);
                }
                if (cont) {
                    var c = 0;
                    var it = setInterval(function() { c++; cont.textContent = c; if (c >= 41) clearInterval(it); }, 40);
                }
            }, 1800);
        }
    }

    // MODAL PARA AGRANDAR FOTO
    var modal = document.createElement('div');
    modal.className = 'modal-imagen';
    modal.innerHTML = '<div class="modal-fondo"></div><div class="modal-contenido"><button class="modal-cerrar">✕</button><div class="foto-grande" id="fotoGrande"></div><div class="modal-nombre" id="modalNombre"></div></div>';
    document.body.appendChild(modal);
    var fotoGrande = modal.querySelector('#fotoGrande');
    var modalNombre = modal.querySelector('#modalNombre');
    function abrir(contenido, nombre) { fotoGrande.innerHTML = contenido; modalNombre.textContent = nombre || ''; modal.classList.add('activo'); document.body.style.overflow = 'hidden'; }
    function cerrar() { modal.classList.remove('activo'); document.body.style.overflow = ''; }
    modal.querySelector('.modal-cerrar').addEventListener('click', cerrar);
    modal.querySelector('.modal-fondo').addEventListener('click', cerrar);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') cerrar(); });
    document.body.addEventListener('click', function(e) {
        var foto = e.target.closest('.foto-tarjeta,.foto-comandante');
        if (!foto) return;
        var tarjeta = foto.closest('.tarjeta-estudiante,.tarjeta-comandante-grande');
        var nombre = tarjeta && tarjeta.querySelector('h3')? tarjeta.querySelector('h3').textContent.trim() : '';
        var img = foto.querySelector('img');
        if (img && img.src && img.style.display!== 'none' && img.naturalWidth!== 0) {
            abrir('<img src="' + img.src + '" alt="' + nombre + '">', nombre);
        } else {
            abrir(foto.innerHTML, nombre);
        }
    });

    // === EFECTOS DE ESCRITORIO (desactivados en táctiles para ahorrar batería) ===
    if (window.matchMedia && window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    var luz = document.createElement('div');
    luz.className = 'luz-seguidora';
    document.body.appendChild(luz);
    var contEstrellas = document.createElement('div');
    contEstrellas.className = 'contenedor-estrellitas';
    document.body.appendChild(contEstrellas);

    var mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, lastX = 0, lastY = 0, luzX = mouseX, luzY = mouseY;

    function crearEstrellita(x, y) {
        var el = document.createElement('div');
        el.className = 'estrellita-mouse';
        if (Math.random() > 0.7) el.classList.add('tipo-2');
        if (Math.random() > 0.9) el.classList.add('tipo-3');
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.setProperty('--tx', (Math.random() - 0.5) * 140 + 'px');
        el.style.setProperty('--ty', (Math.random() - 0.5) * 140 + 'px');
        contEstrellas.appendChild(el);
        setTimeout(function() { el.remove(); }, 1300);
    }

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX; mouseY = e.clientY;
        var dist = Math.hypot(mouseX - lastX, mouseY - lastY);
        if (dist > 6) { crearEstrellita(mouseX, mouseY); }
        lastX = mouseX; lastY = mouseY;
    });

    document.addEventListener('touchmove', function(e) {
        var t = e.touches[0]; if (!t) return;
        for (var i = 0; i < 3; i++) crearEstrellita(t.clientX + (Math.random() - 0.5) * 30, t.clientY + (Math.random() - 0.5) * 30);
    }, { passive: true });

    (function animLuz() {
        luzX += (mouseX - luzX) * 0.1;
        luzY += (mouseY - luzY) * 0.1;
        luz.style.left = luzX + 'px';
        luz.style.top = luzY + 'px';
        requestAnimationFrame(animLuz);
    })();

    // Destello al tocar tarjeta
    document.body.addEventListener('click', function(e) {
        var tarjeta = e.target.closest('.tarjeta-estudiante,.foto-tarjeta,.tarjeta-comandante-grande,.boton-magico');
        if (!tarjeta) return;
        var rect = tarjeta.getBoundingClientRect();
        var dest = document.createElement('div');
        dest.className = 'destello-toque';
        dest.style.left = (e.clientX - rect.left) + 'px';
        dest.style.top = (e.clientY - rect.top) + 'px';
        tarjeta.appendChild(dest);
        setTimeout(function() { dest.remove(); }, 650);
        for (var i = 0; i < 12; i++) (function(ii) { setTimeout(function() { crearEstrellita(e.clientX, e.clientY); }, ii * 25); })(i);
    });

    document.body.addEventListener('mouseover', function(e) {
        var c = e.target.closest('.tarjeta-estudiante');
        if (c) c.classList.add('brillo-activo');
    });
    document.body.addEventListener('mouseout', function(e) {
        var c = e.target.closest('.tarjeta-estudiante');
        if (c) c.classList.remove('brillo-activo');
    });

    // Luciérnagas flotando - también en familia.html
    for (var l = 0; l < 10; l++) {
        var lu = document.createElement('div');
        lu.className = 'luciernaga';
        lu.style.left = Math.random() * 100 + '%';
        lu.style.top = Math.random() * 100 + '%';
        lu.style.animationDelay = Math.random() * 9 + 's';
        lu.style.animationDuration = (7 + Math.random() * 5) + 's';
        document.body.appendChild(lu);
    }
    }
});