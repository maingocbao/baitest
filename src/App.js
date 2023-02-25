import { useState } from "react";

export default function App() {
  const STATUSES = [
    { label: "Tất cả", value: 2 },
    { label: "Đang kinh doanh", value: 1 },
    { label: "Ngừng kinh doanh", value: 0 },
  ];
  const DATA = [
    {
      BrandCode: "SAMSUNG",
      CateProCode: "DIENTHOAI",
      ProductCode: "GALAXYS22ULTRA",
      ProductName: "Galaxy S22 Ultra 5G 128GB",
      Price: 27000000,
      UPDc: 2000000,
      UPRateDc: 0,
      FlagPrice: 1,
      FlagActive: 0,
    },
    {
      BrandCode: "SAMSUNG",
      CateProCode: "DIENTHOAI",
      ProductCode: "GALAXYZFLIP3",
      ProductName: "Galaxy Z Flip3 5G 256GB",
      Price: 17000000,
      UPDc: 1700000,
      UPRateDc: 10,
      FlagPrice: 0,
      FlagActive: 1,
    },
    {
      BrandCode: "IPHONE",
      CateProCode: "DIENTHOAI",
      ProductCode: "IPHONE13PROMAX",
      ProductName: "iPhone 13 Pro Max 128GB",
      Price: 29000000,
      UPDc: 2900000,
      UPRateDc: 10,
      FlagPrice: 0,
      FlagActive: 1,
    },
    {
      BrandCode: "IPHONE",
      CateProCode: "DIENTHOAI",
      ProductCode: "IPHONE13MINI",
      ProductName: "iPhone 13 Mini 526GB",
      Price: 24000000,
      UPDc: 3000000,
      UPRateDc: 0,
      FlagPrice: 1,
      FlagActive: 0,
    },
    {
      BrandCode: "OPPO",
      CateProCode: "DIENTHOAI",
      ProductCode: "OPPORENO7",
      ProductName: "Oppo Reno7",
      Price: 9990000,
      UPDc: 1500000,
      UPRateDc: 0,
      FlagPrice: 1,
      FlagActive: 1,
    },
    {
      BrandCode: "XIAOMI",
      CateProCode: "DIENTHOAI",
      ProductCode: "XIAOMIREDMINOTE11",
      ProductName: "Xiaomi Redmi Note 11",
      Price: 4490000,
      UPDc: 449000,
      UPRateDc: 10,
      FlagPrice: 0,
      FlagActive: 1,
    },
  ];

  const [data, setData] = useState(DATA);
  const [thuonghieu, setThuonghieu] = useState("");
  const [product, setProduct] = useState("");
  const [masp, setMasp] = useState("");
  const [tensp, setTensp] = useState("");
  const [gia, setGia] = useState("");
  const [edittingRow, setEdittingRow] = useState("");
  const [trangthai, setTranthai] = useState("");
  const [listDelete, setListDelete] = useState([]);
  const [price, setPrice] = useState(0);
  const [updc, setUpdc] = useState("");
  const [upratedc, setUpratedc] = useState("");
  const onPresEditingRow = (item) => {
    setThuonghieu(item.BrandCode);
    setProduct(item.CateProCode);
    setMasp(item.ProductCode);
    setTensp(item.ProductName);
    setGia(item.Price);
    setTranthai(item.FlagActive);
    setEdittingRow(item.BrandCode);
  };
  const onchangeThuonghieu = (e) => {
    setThuonghieu(e.currentTarget.value);
  };

  const onchangeSanpham = (e) => {
    setProduct(e.currentTarget.value);
  };
  const onchangeMasp = (e) => {
    if (DATA.ProductCode) {
    } else {
    }
    setMasp(e.currentTarget.value);
  };
  const onchangeTensp = (e) => {
    setTensp(e.currentTarget.value);
  };
  const onchangeTrangthai = (e) => {
    setTranthai(e.currentTarget.value);
  };
  const onchangeUpdc = (e) => {
    setUpdc(e.currentTarget.value);
    setUpratedc(0);
  };
  const onchangeUpdca = (e) => {
    let math = e.currentTarget.value;
    let maths = (math / 100) * gia;
    console.log(maths);
    if (maths > 650000) {
      setUpdc(650000);
    } else {
      setUpdc(maths);
    }
    setUpratedc(math);
  };
  const onchangeGia = (e) => {
    setGia(e.currentTarget.value);
  };
  const onchangePrice = (e) => {
    setPrice(1);
  };
  const handleSumbit = () => {
    let Datas = {};
    Datas["BrandCode"] = thuonghieu;
    Datas["CateProCode"] = product;
    Datas["ProductCode"] = masp;
    Datas["ProductName"] = tensp;
    Datas["Price"] = gia;
    Datas["FlagActive"] = trangthai;
    Datas["UPDc"] = updc;
    Datas["FlagPrice"] = price;
    Datas["UPRateDc"] = upratedc;
    var trung = data.filter((item) => {
      return item.ProductCode === Datas.ProductCode;
    });
    if (trung.length === 0) {
      setData([...data, Datas]);
    } else {
      window.alert("Trung ma sp");
    }

    setThuonghieu("");
    setProduct("");
    setMasp("");
    setTensp("");
    setGia("");
    setTranthai("");
    setEdittingRow("");
    setUpdc("");
    setPrice("");
    setUpratedc("");
  };

  const handleChangeUpdate = () => {
    let index = data.findIndex((item) => item.BrandCode === edittingRow);
    let Datas = [...data];
    Datas[index] = {
      BrandCode: thuonghieu,
      CateProCode: product,
      ProductCode: masp,
      ProductName: tensp,
      Price: gia,
      FlagActive: trangthai,
      UPDc: updc,
      FlagPrice: price,
      UPRateDc: upratedc,
    };
    setData(Datas);
    setThuonghieu("");
    setProduct("");
    setMasp("");
    setTensp("");
    setTranthai("");
    setGia("");
    setEdittingRow("");
    setUpdc("");
    setPrice("");
    setUpratedc("");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (e.target.value === "2") {
      setData(DATA);
      return;
    } else {
      setData(DATA.filter((item) => item.FlagActive === Number(value)));
    }
  };

  const handleDelete = (e, item) => {
    const isFind = listDelete.includes(item.ProductCode);
    console.log(isFind);
    console.log(listDelete);
    if (isFind) {
      const newArr = [...listDelete].filter((itemDelete) => {
        return itemDelete !== item.ProductCode;
      });

      setListDelete(newArr);
    } else {
      setListDelete((p) => [...p, item.ProductCode]);
    }

    let datas = {
      ...listDelete,
    };
    console.log("datas ", datas);
  };
  const handleListDeltel = () => {
    if (!listDelete.length) {
      alert("Bạn chưa chọn các sản phẩm để xóa nhiều");
      return;
    }

    let index = DATA.filter((item) => !listDelete.includes(item.ProductCode));
    console.log(index);
    setData(index);
  };
  const onPresDetelRow = (id) => {
    let Newdata = [...data];
    let index = data.findIndex((item) => item.id === id);
    Newdata.splice(index, 1);
    setData(Newdata);
  };
  return (
    <div>
      <select name="" id="" onChange={handleChange}>
        {STATUSES.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <button type="button" onClick={() => handleListDeltel()}>
        Tiến hành xóa nhiều
      </button>
      <table border={1}>
        <tr>
          <td>STT</td>
          <td>Action</td>
          <td>Tiến Hành xóa nhiều</td>
          <td>Mã sản phẩm</td>
          <td>Tên sản phẩm</td>
          <td>Gía sản phẩm</td>
          <td>% Khuyến mại</td>
          <td>Gía khuyến mại</td>
          <td>Khuyến mại theo giá</td>
          <td>Thương hiệu</td>
          <td>Nhóm sản phẩm</td>
          <td>Trạng thái</td>
        </tr>
        {data.map((item, id) => (
          <tr key={id}>
            <td>{++id}</td>
            <td>
              <button onClick={(e) => onPresDetelRow(id)}>Xóa</button>
            </td>
            <td>
              <input
                type={"checkbox"}
                checked={listDelete.includes(item.ProductCode) ? true : false}
                onChange={(e) => handleDelete(e, item)}
              />
            </td>
            <td>{item.ProductCode}</td>
            <td>{item.ProductName}</td>
            <td>{item.Price}</td>
            <td>{item.UPRateDc}</td>
            <td>{item.UPDc}</td>
            <td>{item.FlagPrice}</td>
            <td>{item.BrandCode}</td>
            <td>{item.CateProCode}</td>
            <td>{item.FlagActive}</td>
            <td>
              <button onClick={() => onPresEditingRow(item)}>Chỉnh sửa</button>
            </td>
          </tr>
        ))}
      </table>
      <div>
        Thương Hiệu <input value={thuonghieu} onChange={onchangeThuonghieu} />
      </div>
      <div>
        Nhóm sản phẩm <input value={product} onChange={onchangeSanpham} />
      </div>
      <div>
        Mã sản phẩm
        <input value={masp} disabled={edittingRow} onChange={onchangeMasp} />
      </div>
      <div>
        Tên sản phẩm <input value={tensp} onChange={onchangeTensp} />
      </div>
      <div>
        Gía
        <input value={gia} onChange={onchangeGia} />
      </div>
      <div>
        Trạng thái
        <input value={trangthai} onChange={onchangeTrangthai} />
      </div>
      <div>
        <input type={"checkbox"} onChange={onchangePrice} />
      </div>
      <div>
        {price ? (
          <>
            <div>giá km </div>
            <input value={updc} onChange={onchangeUpdc} />
          </>
        ) : (
          <>
            <div>phần trăm khuyến mại </div>
            <input value={upratedc} onChange={onchangeUpdca} />
          </>
        )}
      </div>

      {edittingRow ? (
        <button onClick={handleChangeUpdate}>sửa</button>
      ) : (
        <button onClick={handleSumbit}>thêm</button>
      )}
    </div>
  );
}
