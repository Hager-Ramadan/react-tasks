import "./ShopPage.scss"
import "../../components/Card/Card"
import Card from "../../components/Card/Card";
function ShopPage() {
  return (
    <div className="container_card">

      <div className="row justify-content-between" id="ShopPage">
        <Card ImgUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ProductTitle="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" ProductDescription="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" ProductPrice="109.95 " />
        <Card ImgUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" ProductTitle="Mens Casual Slim Fit T-Shirts" ProductDescription="Slim-fitting style, contrast raglan long sleeve, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans." ProductPrice="22.3 " />
        <Card ImgUrl="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" ProductTitle="Mens Cotton Jacket" ProductDescription="great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day." ProductPrice="55.99 " />
        <Card ImgUrl="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" ProductTitle="Mens Casual Slim Fit" ProductDescription="The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description." ProductPrice="15.99 " />
        <Card ImgUrl="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" ProductTitle="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" ProductDescription="From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection." ProductPrice="695 " />
        <Card ImgUrl="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" ProductTitle="White Gold Plated Princess" ProductDescription="Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day..." ProductPrice="9.99 " />
        <Card ImgUrl="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" ProductTitle="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive" ProductDescription="Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty" ProductPrice="168 " />
        <Card ImgUrl="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" ProductTitle="Pierced Owl Rose Gold Plated Stainless Steel Double" ProductDescription="Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores), Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing;)" ProductPrice="109 " />
        <Card ImgUrl="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" ProductTitle="WD 2TB Elements Portable External Hard Drive - USB 3.0 " ProductDescription="USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system" ProductPrice="64 " />

      </div>
    </div>
  );

}

export default ShopPage