const tokoBarang = [
    {
        nama: 'Tepung Terigu',
        harga: 12000
    },
    {
        nama: 'Gula Putih',
        harga: 14000
    },
    {
        nama: 'Gula Aren',
        harga: 24000
    },
    {
        nama: 'Beras',
        harga: 10500
    },
    {
        nama: 'Garam',
        harga: 2000
    },
    {
        nama: 'Kopi Bubuk',
        harga: 6000
    },
    {
        nama: 'Pasta Gigi',
        harga: 7000
    },
    {
        nama: 'Air Botol Kecil',
        harga: 3500
    },
    {
        nama: 'Air Botol Besar',
        harga: 6000
    }    
];

function selectBarang() {
    let select = document.querySelector('#namaBarang');
    for (let i = 0; i < tokoBarang.length; i++){
        let option = document.createElement('option');
        option.value = tokoBarang[i].nama;
        option.innerText += tokoBarang[i].nama;
        select.appendChild(option);
    }
    let selectJumlah = document.querySelector('#jumlahBarang');
    for (let i = 0; i < 10; i++){
        let option = document.createElement('option');
        option.value = (i+1);
        option.innerText = (i+1);
        selectJumlah.appendChild(option);
    }
}

function renderBarang() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ""
    tokoBarang.forEach((barang) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${barang.nama}</td>`;
        row.innerHTML += `<td>Rp. ${barang.harga}</td>`;
        tbody.appendChild(row);
    });
}

function beliBarang() {
    let nama = document.getElementById('namaBarang').value;
    let jumlah = document.getElementById('jumlahBarang').value;
    let hargaBarang;
    for (let i = 0; i < tokoBarang.length; i++){
        if (nama === tokoBarang[i].nama){
            hargaBarang = tokoBarang[i].harga;
        }
    }
    hargaBarang = hargaBarang * parseInt(jumlah);
    let main = document.querySelector('main');
    let table = document.createElement('table');
    table.className = 'result';
    main.innerHTML = '';
    main.appendChild(table);
    let headerResult = document.createElement('tr');
    headerResult.innerHTML = `<th>Nama Barang</th>`;
    headerResult.innerHTML += `<th>Jumlah Pembelian</th>`;
    headerResult.innerHTML += `<th>Harga Total</th>`;
    table.appendChild(headerResult)
    let result = document.createElement('tr');
    result.innerHTML = `<td>${nama}</td>`;
    result.innerHTML += `<td>${jumlah}</td>`
    result.innerHTML += `<td>${hargaBarang}</td>`;
    table.appendChild(result);
    document.querySelector('body').style.height = '100vh'
}
selectBarang();
renderBarang();