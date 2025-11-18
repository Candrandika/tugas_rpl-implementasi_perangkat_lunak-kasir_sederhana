import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ListProducts } from './classes/ListProduct';
import { Product } from './classes/Product';
import { Transaction } from './classes/Transaction';
import { formatNum } from './helper/formatNumber';

// buat daftar produk
const katalog: ListProducts = new ListProducts();
katalog.addProduct(new Product("A001", "Buku Tulis", 3000, 100));
katalog.addProduct(new Product("A002", "Pensil", 2000, 100));
katalog.addProduct(new Product("A003", "Pulpen", 2500, 100));

// buat transaksi baru
const transaksi = new Transaction()

const search_product_btn = document.getElementById('search-product-btn') as HTMLButtonElement
search_product_btn.addEventListener('click', () => {
    const input = document.getElementById('product-input') as HTMLInputElement
    transaksi.addItem(input.value, katalog)
    updateTableProduct()
})


function updateTableProduct() {
    const table = document.getElementById('cart-table-body') as HTMLTableElement
    table.innerHTML = ''

    let rows = ''
    transaksi.getItems().forEach(item => {
        rows += `
            <tr>
                <td>${item.getProduct().getCode()} | ${item.getProduct().getName()}</td>
                <td class="text-center">Rp ${formatNum(item.getProduct().getPrice())}</td>
                <td class="text-center">${formatNum(item.getQty())}</td>
                <td class="text-end">Rp ${formatNum(item.getSubTotal())}</td>
            </tr>
        `
    })

    if(rows === '') rows = '<tr><td colspan="4" class="text-center text-muted">-- belum ada produk --</td></tr>'
    else rows += `
        <tr class="table-dark align-middle">
            <td colspan="3">Total</td>
            <th class="text-end fw-bolder fs-5">Rp ${formatNum(transaksi.getTotalPrice())}</th>
        </tr>
    `
    table.innerHTML = rows
}