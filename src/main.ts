import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ListProducts } from './classes/ListProduct';
import { Product } from './classes/Product';
import { Transaction } from './classes/Transaction';

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
                <td>${item.getProduct().getPrice()}</td>
                <td>${item.getQty()}</td>
                <td>${item.getSubTotal()}</td>
            </tr>
        `
    })

    if(rows === '') rows = '<tr><td colspan="4" class="text-center text-muted">-- belum ada produk --</td></tr>'
    else rows += `
        <tr>
            <td colspan="3" class="text-end">Total</td>
            <td>${transaksi.getTotalPrice()}</td>
        </tr>
    `
    table.innerHTML = rows
}