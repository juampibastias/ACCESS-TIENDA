import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { imageUpload } from "../../utils/imageUpload";
import { postData, getData, putData } from "../../utils/fetchData";
import { useRouter } from "next/router";

const ProductsManager = () => {
  const initialState = {
    title: "",
    price: 0,
    inStock: 0,
    description: "",
    content: "",
    color: "",
    category: "",
  };
  const [product, setProduct] = useState(initialState);
  const { title, price, inStock, description, content, color, category } =
    product;

  const [images, setImages] = useState([]);

  const { state, dispatch } = useContext(DataContext);
  const { categories, auth } = state;

  const router = useRouter();
  const { id } = router.query;
  const [onEdit, setOnEdit] = useState(false);

  useEffect(() => {
    if (id) {
      setOnEdit(true);
      getData(`product/${id}`).then((res) => {
        setProduct(res.product);
        setImages(res.product.images);
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages([]);
    }
  }, [id]);

  const handleUploadJson = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (file.type !== "application/json") {
      return dispatch({
        type: "NOTIFY",
        payload: { error: "El archivo subido no es un archivo JSON válido." },
      });
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const products = JSON.parse(event.target.result);
      console.log(products)
      for (const product of products) {
        setProduct({
          title: product.title,
          price: product.price,
          inStock: product.inStock,
          description: product.description,
          content: product.content,
          color: product.color,
          category: product.category,
        });
console.log(setProduct);
        // assuming that the product has images
        setImages(product.images);
        handleSubmit({ preventDefault: () => {} });
        await postData("product", product, auth.token);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      dispatch({
        type: "NOTIFY",
        payload: {
          success: "La carga masiva de productos se ha completado con éxito.",
        },
      });
      setTimeout(() => {
        dispatch({ type: "CLEAR_NOTIFICATION" });
      }, 500);
    };
    reader.readAsText(file);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleUploadInput = (e) => {
    dispatch({ type: "NOTIFY", payload: {} });
    let newImages = [];
    let num = 0;
    let err = "";
    const files = [...e.target.files];

    if (files.length === 0)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "El archivo no existe." },
      });

    files.forEach((file) => {
      if (file.size > 1024 * 1024)
        return (err = "La imagen es mas grande que 1mb");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return (err = "Formato de imagen incorrecto.");

      num += 1;
      if (num <= 5) newImages.push(file);
      return newImages;
    });

    if (err) dispatch({ type: "NOTIFY", payload: { error: err } });

    const imgCount = images.length;
    if (imgCount + newImages.length > 5)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Seleccione hasta 5 imagenes." },
      });
    setImages([...images, ...newImages]);
  };

  const deleteImage = (index) => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth.user.role !== "admin")
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Autenticación inválida." },
      });

    if (
      !title ||
      !price ||
      !inStock ||
      !description ||
      !content ||
      !color ||
      category === "all" ||
      images.length === 0
    )
      return dispatch({
        type: "NOTIFY",
        payload: {
          success: "Realizando la carga masiva de productos, aguarde...",
        },
      });
    setTimeout(() => {
      dispatch({ type: "CLEAR_NOTIFICATION" });
    }, 1000);

    dispatch({ type: "NOTIFY", payload: { loading: true } });
    let media = [];
    const imgNewURL = images.filter((img) => !img.url);
    const imgOldURL = images.filter((img) => img.url);

    if (imgNewURL.length > 0) media = await imageUpload(imgNewURL);

    let res;
    if (onEdit) {
      res = await putData(
        `product/${id}`,
        { ...product, images: [...imgOldURL, ...media] },
        auth.token
      );

      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    } else {
      res = await postData(
        "product",
        { ...product, images: [...imgOldURL, ...media] },
        auth.token
      );
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    }

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  return (
    <div className="products_manager">
      <Head>
        <title>Administración de productos</title>
      </Head>

      <h3 className="text-center my-5 mb-5">PRODUCTOS MANAGER</h3>

      <h4 className="d-flex justify-content-center mb-5">
        Carga individual de productos
      </h4>
      <div>
        <p className="d-flex justify-content-center">
          Todos los campos son obligatorios en la carga individual
        </p>
      </div>

      <form id="form" className="row" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Título"
            className="d-block my-4 w-100 p-2"
            onChange={handleChangeInput}
          />

          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                name="price"
                value={price}
                placeholder="Precio"
                className="d-block w-100 p-2"
                onChange={handleChangeInput}
              />
            </div>

            <div className="col-sm-6">
              <label htmlFor="price">En Stock</label>
              <input
                type="number"
                name="inStock"
                value={inStock}
                placeholder="En Stock"
                className="d-block w-100 p-2"
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <textarea
            name="description"
            id="description"
            cols="30"
            rows="4"
            placeholder="Descripción"
            onChange={handleChangeInput}
            className="d-block my-4 w-100 p-2"
            value={description}
          />

          <textarea
            name="content"
            id="content"
            cols="30"
            rows="6"
            placeholder="Comentario"
            onChange={handleChangeInput}
            className="d-block my-4 w-100 p-2"
            value={content}
          />

          <textarea
            name="color"
            id="color"
            cols="30"
            rows="6"
            placeholder="Color"
            onChange={handleChangeInput}
            className="d-block my-4 w-100 p-2"
            value={color}
          />

          <div className="input-group-prepend px-0 my-2">
            <select
              name="category"
              value={category}
              onChange={handleChangeInput}
            >
              <option value="">Seleccionar una categoría</option>
              {categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat.name}
                  selected={cat.name === product.category}
                >
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-info my-2 px-4">
            {onEdit ? "Actualizar" : "Crear"}
          </button>
        </div>

        <div className="col-md-6 my-4">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Elegí la foto</span>
            </div>
            <div className="custom-file border rounded">
              <input
                type="file"
                className="custom-file-input"
                onChange={handleUploadInput}
                multiple
                accept="image/*"
              />
            </div>
          </div>

          <div className="row img-up mx-0">
            {images.map((img, index) => (
              <div key={index} className="file_img my-1">
                <img
                  src={img.url ? img.url : URL.createObjectURL(img)}
                  alt="imagen"
                  className="img-thumbnail rounded"
                />

                <span onClick={() => deleteImage(index)}>X</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 d-d-block">
          <h4 className="d-flex justify-content-center mb-5">
            Carga Masiva de Productos
          </h4>
          <p className="d-flex justify-content-center mb-5">
            Es obligatorio refrescar esta pagina antes de realizar una carga
            masiva, para esto presione F5.
          </p>
          <input
            type="file"
            onChange={handleUploadJson}
            className="d-flex justify-content-center btn btn-info my-2 px-4 mb-5 "
          />
        </div>
      </form>
    </div>
  );
};

export default ProductsManager;
