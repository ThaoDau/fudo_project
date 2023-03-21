const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/index/anh1.png",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/index/anh2.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/index/anh3.png",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/index/anh4.png",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/index/anh5.png",
        category: 5
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"src/img/index/anh6.png",
        category: 6
    }
]

const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"src/img/index/dm1.png"
    },
    {
        id:2,
        name:"vegan",
        image:"src/img/index/dm2.png"
    },
    {
        id:3,
        name:"meat",
        image:"src/img/index/dm3.png"
    },
    {
        id:4,
        name:"dessert",
        image:"src/img/index/dm4.png"
    },
    {
        id:5,
        name:"lunch",
        image:"src/img/index/dm5.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"src/img/index/dm6.png"
    }
]

function showProduct(data){
    const product = document.querySelector('.product');
    if(product){
        product.innerHTML=''
        for(let item of data){
            product.innerHTML += `
            <div class="sanpham">
                <a href="detail.html?id=${item.id}"><img src="${item.image}" alt="" class="anh1"></a>
                <a href="detail.html?id=${item.id}"> <h3>${item.name}</h3> </a>
                <img src="src/img/index/Timer.png" alt="" class="cook">
                <span id="minute">30 Minutes</span>
                <img src="src/img/index/ForkKnife.png" alt="" class="cook">
                <span>Snack</span>
            </div>
            `
        }
    }
    

}
showProduct(ListProduct);
    

const filterSelect = document.querySelector("#filter-select");
function filterProduct(){
    const under30 = ListProduct.filter(function(product){
        return product.price <30;
    })
    const over30 = ListProduct.filter(function(product){
        return product.price > 30;
    })
    if(filterSelect.value == "under30"){
        showProduct(under30);
    }
    if(filterSelect.value == "over30"){
        showProduct(over30);
    }
    if(filterSelect.value == "all"){
        showProduct(ListProduct);
    }


}
if(filterSelect){
    filterSelect.addEventListener("change",filterProduct);

}

    function showCategory(e){
        const box_category = document.querySelector('.box-category');
        for(let item of e){
            if(box_category){
                box_category.innerHTML +=
                `
                <div class="anh-category">
                    <a href=""><img src="${item.image}" alt=""></a>
                    <h3>${item.name}</h3>
                </div>
                `
            }
           
        }
    }
    showCategory(ListCategory);

    function detailProduct(){
        const prdId = new URLSearchParams(window.location.search).get('id')
        // console.log(prdId);
        if(prdId){
            const product = ListProduct.find(function(item){
                return item.id == prdId;
            })
            
            const noidung = document.querySelector('.noidung');
            noidung.innerHTML = `
                    <div class="tittle">
                    <h1>${product.name}</h1>
                    <p class="price">$ ${product.price}</p>
                    <p class="chu">${product.desc}</p>
                    <div class="quantity">
                        <input type="text" placeholder="Quantity">
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div class="anh-noidung">
                    <img src="${product.image}" alt="">
                </div>
            `
        }
    }
    detailProduct();
    /*CART*/
    
function addCart(id) {
    for (let item of ListProduct) {
        if(id == item.id){
            if(!item.quality){
                item.quality = 1;
                ListCart.push(item);
            } else{
                item.quality += 1;
            }
        }
    }
    sessionStorage.setItem("cart", JSON.stringify(ListCart));
}

function showCart(){
    const listCartDiv = document.querySelector(".row1");
    let data = sessionStorage.getItem("cart");
    data = JSON.parse(data);
    if(listCartDiv){
        for(let item of data){
            listCartDiv.innerHTML+=`
            <div class="maxwin">
            <div class="stt">
                    <p>${item.quality}</p>
                </div>
                <div class="rowimg"><img src="${item.image}" alt=""></div>
                <div class="describe">
                    <h2>${item.name}</h2>
                    <div class="jj"><p>${item.desc}</p></div>
                    <div class="price"><p>$ ${item.price}</p></div>
                </div>
                
                <button>Thanh toán</button>
            </div>
            `
        }
    }
}showCart()

    function listCategory(){
        const cateList = document.querySelector('.trai')
        for(let item of ListCategory){
            cateList.innerHTML += `
                <li><a href="./product.html?cateId=${item.id}">${item.name}</a></li>
            `
        }
    }
    listCategory()
    
    function listProductPage(data){
        const listProductDiv = document.querySelector('.phai')
        listProductDiv.innerHTML = ""
        for(let item of data){ // lặp qua mảng truyền vào tham số data
    
            // đổ dữ liệu vào trong thẻ div popular
            listProductDiv.innerHTML += `
            <div class="part">
                <a href=""><img src="${item.image}" alt=""></a>
                <p class="text1">${item.name}</p>
                <p class="text2">$ ${item.price}</p>
                <button>Add to Cart</button>
            </div>
            `         
        }
    }
    
    
    function reRender(){
        const cateId = new URLSearchParams(window.location.search).get('cateId')
        const productByCategory = ListProduct.filter(function(item){
            return item.category == cateId
        })   
        if(cateId){
            listProductPage(productByCategory)
        }else{
            listProductPage(ListProduct)
        }
        
    }
    reRender();

    /*BLOG*/
    function myBlog(data){
        const myBlogDiv=document.querySelector(".main-content1");
        if(myBlogDiv){
            myBlogDiv.innerHTML="";
            for(let item of data){
            myBlogDiv.innerHTML +=`
            <div class="content">
                        <img src="${item.image}" alt="">
                        <div class="name"><p>${item.name}</p></div>
                        <div class="desc"><p>${item.desc}</p></div>
                    </div>
            `
        }
    }}
    // myBlog(ListBlog);
    
    function menuBlog(){
        const listBlog = document.querySelector(".list");
        if(listBlog){
            for(let item of BlogCategory){
                listBlog.innerHTML+=`
                <ul>
                        <li><a href="/blog.html?blogId=${item.id}">${item.name}</a></li>
                        
                    </ul>
                `
            }
        }
    }menuBlog()
    
    function reBlog(){
        const blogId =new URLSearchParams(window.location.search).get("blogId")
        
        const searchContent = ListBlog.filter(function(item){
            return item.id==blogId;
        })
        if (blogId) {
            myBlog(searchContent);
        } else {
            myBlog(ListBlog);
        }
    }reBlog()
    
    


