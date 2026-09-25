<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ΖΛΥΝΛ | ZAYNA</title>

<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body{
    background:#050505;
    color:#fff;
    font-family:Arial,sans-serif;
}

header{
    position:sticky;
    top:0;
    z-index:10;
    background:rgba(5,5,5,.95);
    border-bottom:1px solid #222;
    padding:18px 6%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:25px;
    font-weight:bold;
    letter-spacing:4px;
}

.cart-btn{
    background:#fff;
    color:#000;
    border:0;
    padding:12px 18px;
    border-radius:30px;
    font-weight:bold;
    cursor:pointer;
}

.hero{
    min-height:75vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:40px 20px;
    background:
    radial-gradient(circle at center,#222 0%,#050505 55%);
}

.hero h1{
    font-size:clamp(55px,12vw,140px);
    letter-spacing:10px;
    line-height:.9;
}

.hero p{
    margin:25px 0;
    color:#aaa;
    font-size:18px;
}

.shop-btn{
    background:#fff;
    color:#000;
    padding:15px 30px;
    border:0;
    border-radius:30px;
    font-weight:bold;
    cursor:pointer;
}

section{
    padding:70px 6%;
}

.title{
    text-align:center;
    font-size:35px;
    margin-bottom:40px;
}

.products{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:22px;
}

.product{
    background:#101010;
    border:1px solid #252525;
    border-radius:18px;
    overflow:hidden;
}

.product-image{
    height:320px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:
    radial-gradient(circle,#333,#080808 65%);
    font-size:22px;
    letter-spacing:4px;
}

.product-info{
    padding:20px;
}

.product h3{
    margin-bottom:10px;
}

.price{
    color:#ccc;
    margin-bottom:15px;
}

select{
    width:100%;
    background:#080808;
    color:#fff;
    border:1px solid #333;
    padding:12px;
    border-radius:8px;
    margin-bottom:10px;
}

.add{
    width:100%;
    padding:13px;
    border:0;
    border-radius:8px;
    background:#fff;
    color:#000;
    font-weight:bold;
    cursor:pointer;
}

.about{
    text-align:center;
    color:#aaa;
    line-height:2;
    max-width:700px;
    margin:auto;
}

footer{
    text-align:center;
    padding:30px;
    border-top:1px solid #222;
    color:#777;
}

/* CART */

.overlay{
    display:none;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.75);
    z-index:20;
}

.panel{
    position:absolute;
    right:0;
    top:0;
    height:100%;
    width:min(450px,100%);
    background:#0b0b0b;
    padding:25px;
    overflow:auto;
}

.close{
    background:none;
    border:0;
    color:#fff;
    font-size:28px;
    cursor:pointer;
    float:left;
}

.cart-item{
    border-bottom:1px solid #222;
    padding:18px 0;
}

.qty{
    display:flex;
    gap:10px;
    align-items:center;
    margin-top:10px;
}

.qty button{
    background:#222;
    color:#fff;
    border:0;
    padding:7px 12px;
    border-radius:6px;
}

.checkout{
    margin-top:25px;
}

.checkout input,
.checkout textarea{
    width:100%;
    background:#080808;
    color:#fff;
    border:1px solid #333;
    border-radius:8px;
    padding:13px;
    margin-bottom:12px;
    font-family:inherit;
}

.checkout textarea{
    height:100px;
    resize:none;
}

.total{
    font-size:22px;
    font-weight:bold;
    margin:20px 0;
}

.order-btn{
    width:100%;
    padding:15px;
    border:0;
    border-radius:10px;
    background:#fff;
    color:#000;
    font-weight:bold;
    cursor:pointer;
}

.empty{
    color:#888;
    text-align:center;
    padding:50px 0;
}
</style>
</head>

<body>

<header>
    <div class="logo">ΖΛΥΝΛ</div>

    <button class="cart-btn" onclick="openCart()">
        السلة 🛒
        <span id="cartCount">0</span>
    </button>
</header>

<section class="hero">
    <h1>ZAYNA</h1>
    <p>WEAR THE SHADOW.</p>

    <button class="shop-btn"
    onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">
        تسوق الآن
    </button>
</section>

<section id="shop">

    <h2 class="title">المجموعة</h2>

    <div class="products">

        <div class="product">
            <div class="product-image">
                ZAYNA
            </div>

            <div class="product-info">
                <h3>SHADOW BOX TEE</h3>
                <div class="price">650 جنيه</div>

                <select id="size1">
                    <option value="S">المقاس S</option>
                    <option value="M">المقاس M</option>
                    <option value="L">المقاس L</option>
                    <option value="XL">المقاس XL</option>
                    <option value="XXL">المقاس XXL</option>
                </select>

                <button class="add"
                onclick="addToCart('SHADOW BOX TEE',650,'size1')">
                    أضف للسلة
                </button>
            </div>
        </div>


        <div class="product">
            <div class="product-image">
                ΖΛΥΝΛ
            </div>

            <div class="product-info">
                <h3>ZAYNA CORE TEE</h3>
                <div class="price">650 جنيه</div>

                <select id="size2">
                    <option value="S">المقاس S</option>
                    <option value="M">المقاس M</option>
                    <option value="L">المقاس L</option>
                    <option value="XL">المقاس XL</option>
                    <option value="XXL">المقاس XXL</option>
                </select>

                <button class="add"
                onclick="addToCart('ZAYNA CORE TEE',650,'size2')">
                    أضف للسلة
                </button>
            </div>
        </div>


        <div class="product">
            <div class="product-image">
                NIGHT
            </div>

            <div class="product-info">
                <h3>NIGHT SIGNAL TEE</h3>
                <div class="price">700 جنيه</div>

                <select id="size3">
                    <option value="S">المقاس S</option>
                    <option value="M">المقاس M</option>
                    <option value="L">المقاس L</option>
                    <option value="XL">المقاس XL</option>
                    <option value="XXL">المقاس XXL</option>
                </select>

                <button class="add"
                onclick="addToCart('NIGHT SIGNAL TEE',700,'size3')">
                    أضف للسلة
                </button>
            </div>
        </div>


        <div class="product">
            <div class="product-image">
                VOID
            </div>

            <div class="product-info">
                <h3>VOID BOX TEE</h3>
                <div class="price">650 جنيه</div>

                <select id="size4">
                    <option value="S">المقاس S</option>
                    <option value="M">المقاس M</option>
                    <option value="L">المقاس L</option>
                    <option value="XL">المقاس XL</option>
                    <option value="XXL">المقاس XXL</option>
                </select>

                <button class="add"
                onclick="addToCart('VOID BOX TEE',650,'size4')">
                    أضف للسلة
                </button>
            </div>
        </div>

    </div>
</section>

<section>
    <h2 class="title">عن ZAYNA</h2>

    <div class="about">
        ZAYNA هي علامة ملابس بطابع مختلف.
        تصميمات مستوحاة من الظلال والليل والهوية.
        البس اللي يمثلك.
    </div>
</section>

<footer>
    © 2026 ΖΛΥΝΛ / ZAYNA
</footer>


<!-- CART -->

<div class="overlay" id="cartOverlay">

    <div class="panel">

        <button class="close" onclick="closeCart()">×</button>

        <h2>السلة</h2>

        <div id="cartItems"></div>

        <div class="total">
            الإجمالي:
            <span id="total">0</span>
            جنيه
        </div>

        <div class="checkout">

            <h2>بيانات الطلب</h2>

            <input id="name"
            placeholder="الاسم بالكامل">

            <input id="phone"
            placeholder="رقم الهاتف"
            type="tel">

            <input id="governorate"
            placeholder="المحافظة">

            <textarea id="address"
            placeholder="العنوان بالتفصيل"></textarea>

            <textarea id="notes"
            placeholder="ملاحظات (اختياري)"></textarea>

            <button class="order-btn"
            onclick="completeOrder()">
                إتمام الطلب
            </button>

        </div>

    </div>

</div>


<script>

let cart = JSON.parse(localStorage.getItem("zaynaCart")) || [];

function saveCart(){
    localStorage.setItem("zaynaCart",JSON.stringify(cart));
    renderCart();
}

function addToCart(name,price,sizeId){

    let size = document.getElementById(sizeId).value;

    cart.push({
        name:name,
        price:price,
        size:size
    });

    saveCart();

    alert("تمت إضافة المنتج للسلة 🛒");
}

function openCart(){

    document.getElementById("cartOverlay").style.display="block";
    renderCart();

}

function closeCart(){

    document.getElementById("cartOverlay").style.display="none";

}

function removeItem(index){

    cart.splice(index,1);
    saveCart();

}

function renderCart(){

    let container=document.getElementById("cartItems");

    document.getElementById("cartCount").innerText=cart.length;

    if(cart.length===0){

        container.innerHTML=
        '<div class="empty">السلة فاضية</div>';

        document.getElementById("total").innerText="0";

        return;
    }

    let total=0;

    container.innerHTML="";

    cart.forEach((item,index)=>{

        total += item.price;

        container.innerHTML += `

        <div class="cart-item">

            <strong>${item.name}</strong>

            <br>

            المقاس: ${item.size}

            <br>

            ${item.price} جنيه

            <div class="qty">

                <button onclick="removeItem(${index})">
                    حذف
                </button>

            </div>

        </div>

        `;

    });

    document.getElementById("total").innerText=total;

}

function completeOrder(){

    if(cart.length===0){

        alert("السلة فاضية");

        return;
    }

    let name=document.getElementById("name").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let governorate=document.getElementById("governorate").value.trim();
    let address=document.getElementById("address").value.trim();

    if(!name || !phone || !governorate || !address){

        alert("من فضلك اكتب كل بيانات الطلب");

        return;
    }

    let total=cart.reduce((sum,item)=>sum+item.price,0);

    let orderText="طلب جديد من ZAYNA%0A%0A";

    orderText += "الاسم: "+encodeURIComponent(name)+"%0A";
    orderText += "الهاتف: "+encodeURIComponent(phone)+"%0A";
    orderText += "المحافظة: "+encodeURIComponent(governorate)+"%0A";
    orderText += "العنوان: "+encodeURIComponent(address)+"%0A";
    orderText += "الإجمالي: "+total+" جنيه%0A%0A";

    cart.forEach((item,index)=>{

        orderText +=
        encodeURIComponent(
        (index+1)+". "+item.name+
        " - "+item.size+
        " - "+item.price+" جنيه"
        )+"%0A";

    });

    alert(
        "تم تجهيز الطلب بنجاح ✅\n\n"+
        "الإجمالي: "+total+" جنيه\n\n"+
        "الخطوة التالية هنربطه بطريقة إرسال الطلب."
    );

}

renderCart();

</script>

</body>
</html>
      
