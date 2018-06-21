import {Component} from '@angular/core';

@Component({
    selector: 'prod-comp',
    templateUrl: './products.component.html'
})

export class ProductComponent{

    title :string = "ProductList";
    showtable:boolean=true;
    showImage:boolean=false;
    filterData:string;
    products:any[]=[
    {
        _id: "5a05dacc734d1d68d42d31f3",
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2016",
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        starRating: 3.5,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        _id: "5a05daec734d1d68d42d32ca",
        productId: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        releaseDate: "March 18, 2016",
        description: "15 gallon capacity rolling garden cart",
        price: 32.99,
        starRating: 4.2,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        _id:	"5a05db24734d1d68d42d3313",
        productId:	8,
        productName:"Saw",
        productCode	:"TBX-0022",
        releaseDate:"May 15, 2016",
        description:"15-inch steel blade hand saw",
        price:	11.55,
        starRating:	3.7,
        imageUrl:"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        
        {	
        _id	: "5a05db3d734d1d68d42d3322",
        productId : 10,
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate	: "October 15, 2015",
        description	: "Standard two-button video game controller",
        price: 35.95,
        starRating: 4.6,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
]
toggleImage():void{
    this.showImage = !this.showImage
}
}