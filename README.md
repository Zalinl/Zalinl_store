<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجر الملابس - الصفحة الرئيسية</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { background-color: #0f0f0f; color: #fff; padding: 20px; }
        header { text-align: center; margin-bottom: 40px; border-bottom: 1px solid #333; padding-bottom: 20px; }
        header h1 { font-size: 2.5rem; letter-spacing: 2px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; max-width: 1200px; margin: 0 auto; }
        .card { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s; }
        .card:hover { transform: translateY(-5px); }
        .card img { width: 100%; height: 320px; object-fit: cover; background: #050505; }
        .card-body { padding: 15px; text-align: center; }
        .card-title { font-size: 1.1rem; margin-bottom: 10px; color: #ddd; }
        .price { font-size: 1.3rem; font-weight: bold; color: #00ff88; margin-bottom: 15px; }
        .btn { background: #fff; color: #000; border: none; padding: 12px 20px; width: 100%; border-radius: 6px; font-weight: bold; cursor: pointer; transition: background 0.2s; }
        .btn:hover { background: #e0e0e0; }

        /* Modal Overlay */
        .modal { display: none; position: fixed; top:0; left:0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); justify-content: center; align-items: center; z-index: 1000; }
        .modal-content { background: #1a1a1a; padding: 30px; border-radius: 12px; width: 90%; max-width: 450px; position: relative; border: 1px solid #333; }
        .close-btn { position: absolute; top: 10px; left: 15px; font-size: 24px; cursor: pointer; color: #888; }
        .form-group { margin-bottom: 15px; text-align: right; }
        .form-group label { display: block; margin-bottom: 5px; color: #ccc; font-size: 0.9rem; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px; background: #0f0f0f; border: 1px solid #333; color: #fff; border-radius: 6px; }
        .submit-btn { background: #00ff88; color: #000; font-size: 1rem; margin-top: 10px; }
        .submit-btn:hover { background: #00cc6c; }
    </style>
</head>
<body>

    <header>
        <h1>STREETWEAR STORE</h1>
        <p style="color: #888; margin-top: 5px;">جميع التيشرتات بسعر موحد: 650 ج.م</p>
    </header>

    <div class="grid" id="products-container"></div>

    <!-- Modal Form -->
    <div class="modal" id="orderModal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <h3 style="margin-bottom: 20px; text-align: center;">إكمال الطلب</h3>
            <form id="orderForm" onsubmit="submitOrder(event)">
                <input type="hidden" id="selectedProduct">
                
                <div class="form-group">
                    <label>الاسم بالكامل</label>
                    <input type="text" id="custName" required placeholder="أدخل اسمك الثلاثي">
                </div>
                <div class="form-group">
                    <label>رقم الهاتف</label>
                    <input type="tel" id="custPhone" required placeholder="01XXXXXXXXX">
                </div>
                <div class="form-group">
                    <label>المحافظة</label>
                    <input type="text" id="custCity" required placeholder="القاهرة، الجيزة...">
                </div>
                <div class="form-group">
                    <label>العنوان بالتفصيل</label>
                    <textarea id="custAddress" rows="2" required placeholder="اسم الشارع، رقم العمارة، الشقة"></textarea>
                </div>
                <div class="form-group">
                    <label>المقاس</label>
                    <select id="custSize">
                        <option value="M">Medium (M)</option>
                        <option value="L">Large (L)</option>
                        <option value="XL">X-Large (XL)</option>
                        <option value="XXL">2X-Large (XXL)</option>
                    </select>
                </div>

                <button type="submit" class="btn submit-btn">تأكيد الطلب (650 ج.م)</button>
            </form>
        </div>
    </div>

    <script>
        // قائمة المنتجات مع إضافة الصور الجديدة
        const products = [
            // الصور الأولى
            { id: 1, name: "T-Shirt Claws Metallic", img: "1000170939.png" },
            { id: 2, name: "T-Shirt Green Bust FUCK", img: "1000170931.png" },
            { id: 3, name: "T-Shirt Money Roll Black", img: "1000169851.jpg" },
            { id: 4, name: "T-Shirt Money Builds Freedom White", img: "1000169850.png" },
            { id: 5, name: "T-Shirt Brain & Hand Black", img: "1000169311.png" },
            { id: 6, name: "T-Shirt Moopie Project Crime Scene", img: "1000168820.png" },
            { id: 7, name: "T-Shirt Lessyne Blue Star", img: "1000168821.png" },
            { id: 8, name: "T-Shirt Character Illustration", img: "1000168822.png" },
            { id: 9, name: "T-Shirt Rock Star Born White", img: "1000168824.png" },
            // الصور الجديدة
            { id: 10, name: "T-Shirt Boxy Band & Baggy White", img: "1000168078.png" },
            { id: 11, name: "T-Shirt Trippy Dimension White", img: "1000168086.png" },
            { id: 12, name: "T-Shirt Boxy And Baggy Black", img: "1000168075.png" },
            { id: 13, name: "T-Shirt Sentence Self Control Black", img: "1000168073.png" },
            { id: 14, name: "T-Shirt Goal Getter Black", img: "1000168072.png" },
            { id: 15, name: "T-Shirt Angel Money Black", img: "1000167897.png" },
            { id: 16, name: "T-Shirt 919 White", img: "1000167896.png" },
            { id: 17, name: "T-Shirt Only You White", img: "1000167898.png" },
            { id: 18, name: "T-Shirt Not Bad Black", img: "1000167895.png" },
            { id: 19, name: "T-Shirt Youth Club Black", img: "1000167894.png" }
        ];

        const container = document.getElementById('products-container');

        products.forEach(p => {
            container.innerHTML += `
                <div class="card">
                    <img src="${p.img}" alt="${p.name}">
                    <div class="card-body">
                        <div class="card-title">${p.name}</div>
                        <div class="price">650 ج.م</div>
                        <button class="btn" onclick="openModal('${p.name}')">طلب الآن</button>
                    </div>
                </div>
            `;
        });

        function openModal(productName) {
            document.getElementById('selectedProduct').value = productName;
            document.getElementById('orderModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('orderModal').style.display = 'none';
        }

        async function submitOrder(e) {
            e.preventDefault();
            
            const orderData = {
                productName: document.getElementById('selectedProduct').value,
                name: document.getElementById('custName').value,
                phone: document.getElementById('custPhone').value,
                city: document.getElementById('custCity').value,
                address: document.getElementById('custAddress').value,
                size: document.getElementById('custSize').value,
                price: 650
            };

            try {
                const response = await fetch('/api/create-bosta-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData)
                });

                if (response.ok) {
                    alert('تم تسجيل طلبك بنجاح! سيتم التواصل معك للشحن عبر بوسطة.');
                    closeModal();
                } else {
                    alert('حدث خطأ أثناء تسجيل الطلب، يرجى المحاولة لاحقاً.');
                }
            } catch (err) {
                console.error(err);
                alert('تم استلام البيانات محلياً. (تحتاج لتشغيل السيرفر للربط المباشر مع بوسطة)');
            }
        }
    </script>
</body>
</html>
