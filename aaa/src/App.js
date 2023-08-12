import './App.css';
import { useFetch } from './hooks/useFetch';
import { useCallback, useEffect, useMemo, useState } from 'react';
import AllProducts from './components/AllProducts/AllProducts';
import Basket from './components/Basket/Basket';

function App() {
  const getProducts = useMemo(
    () => new Worker(new URL("./longProcesses/getProducts.js", import.meta.url)),
    []
  );
  const [products, setProducts] = useState([])
  const [productsList, setProductsList] = useState({
    loading: true,
    list: [],
    basket: [],
    page: 1
  })
  const [counter, setCounter] = useState(1);
  const { isLoading, data, fetchData, setIsLoading } = useFetch();

  const handleFetch = async () => {
    await fetchData('products')
  }
  useEffect(() => {
    handleFetch()
  }, [])
  useEffect(() => {
    if (data) {
      if (window.Worker) {
        const request = {
          action: 'getData',
          period: "initial",
          thePageNumber: productsList.page,
          products: data,
        };

        getProducts.postMessage(JSON.stringify(request));
      }
      setProducts(data, 'data')
    }
  }, [data])
  useEffect(() => {
    if (window.Worker) {
      getProducts.onmessage = (e) => {
        const response = JSON.parse(e.data);

        setProductsList((prev) => ({
          ...prev,
          loading: response.loading,
          list: response.list,
          page: response.page,
        }));
      };
    }
    return () => {
      getProducts.onmessage = null;
    };
  }, [getProducts]);
  const handleCounter = (operator) => {
    let request = {
      action: 'getData'
    };
    if (operator === '+') {
      request = {
        ...request,
        products,
        thePageNumber: counter + 1

      }
      setCounter(prev => prev + 1);
    } else {
      if (counter === 1) return;
      request = {
        ...request,
        products,
        thePageNumber: counter - 1

      }
      setCounter(prev => 
        prev - 1)
    }
    if (window.Worker) {
      getProducts.postMessage(JSON.stringify(request));
    }
  }
  const handleAddToBasket = useCallback((item) => {
    console.log(item, 'item');
    setProductsList((prev) => ({
      ...prev,
      basket: [...prev.basket, item]
    }));
  }, [])
  return (
    <div className="App">
      <Basket products={productsList.basket} />
      <button onClick={() => handleCounter("+")}>
        +
      </button>
      {counter}
      <button onClick={() => handleCounter("-")}>
        -
      </button>
      {products.length > 0 ? <div>There are {products.length} products</div> : <div>loading...</div>}
      {productsList.loading ? (
        <div> Loading..</div>
      )
        :
        (
          <AllProducts products={productsList.list} onClick={handleAddToBasket} />
        )}
    </div>
  );
}

export default App;
