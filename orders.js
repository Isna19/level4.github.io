// orders.js

// Fungsi untuk menghasilkan ID yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel yang menampung data orders
let orders = [];

// Fungsi untuk menambahkan pesanan
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status default
  };
  
  orders.push(newOrder);
  return newOrder; // Mengembalikan pesanan yang ditambahkan
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
    return order; // Mengembalikan pesanan yang diperbarui
  }
  return null; // Jika pesanan tidak ditemukan
}

// Fungsi untuk menghitung total pendapatan dari order yang berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Ambil pesanan yang sudah selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Hitung total pendapatan
}

// Fungsi untuk menghapus pesanan
function deleteOrder(id) {
  const index = orders.findIndex(o => o.id === id);
  if (index !== -1) {
    orders.splice(index, 1); // Menghapus pesanan dari array
    return true; // Mengembalikan true jika berhasil dihapus
  }
  return false; // Jika pesanan tidak ditemukan
}

// Mengekspor variabel dan fungsi untuk digunakan di file lain
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
