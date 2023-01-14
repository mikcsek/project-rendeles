const   result = document.getElementById("result");

const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 2,
        pizza: "Songoku",
        extra: "Ketchup",
        ital: "Pepsi",
        ar: 2000,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 3,
        pizza: "Magyaros",
        extra: "Sajt",
        ital: "Sprite",
        ar: 1800,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 4,
        pizza: "Quatro",
        extra: "Sajt",
        ital: "Coca Cola",
        ar: 2100,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 5,
        pizza: "Diablo",
        extra: "Csípős szósz",
        ital: "Víz",
        ar: 2000,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 6,
        pizza: "Tenger gyümölcsei",
        extra: "Csípős",
        ital: "Pepsi zero",
        ar: 2000,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
]

window.addEventListener("load", async ()   =>  {

    let output = "";

    orders.map(order => {

    output += `
                <div class="order">
                    <div>ID: ${order.id}</div>
                    <div>Pizza: ${order.pizza}</div>
                    <div>Extra: ${order.extra}</div>
                    <div>Ital: ${order.ital}</div>
                    <div>Ár: ${order.ar}</div>
                    <img src="${order.kep}">
                </div>
                
        `
        result.innerHTML = output;
    })
   
})