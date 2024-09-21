import { useEffect, useRef, useState } from 'react'
import './App.css'
import { addDoc, collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
import { db } from './firebase/firebase';



function App() {
  const [data, setData] = useState([{ name: "Loading....", id: "initial" }]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'items'), (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    });
    return unsub
  }, [])
  async function handleDlete(id) {
    const docRef = doc(db, "items", id)
    await deleteDoc(docRef)
    console.log(id);

  }

  console.log(data);

  const [count, setCount] = useState(0)
  const testt = useRef();
  const ref = collection(db, "items")



  function felo(e) {
    e.preventDefault();
    let data = {
      New: testt.current.value
    }

    try {
      addDoc(ref, data);
    } catch (error) {
      console.log(error);

    }

  }



  return <>
    <div className='w-screen h-screen py-8'>
      <div className="container bg-emerald-500 p-8">
        <form action="" className='flex items-center gap-5 justify-center' onSubmit={felo}>
          <div className="relative w-3/4">
            <input ref={testt} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-emerald-500  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">type urs</label>
          </div>
          <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-3.5 ">Submit</button>
        </form>
        <div className="Todo ">
          {data.map((item) => (
            <div key={item.id} className="item flex items-center py-3 w-full justify-center gap-5">
              <p className='w-3/4 py-2.5 rounded-lg '>{item.New}</p>
              <button onClick={() => { handleDlete(item.id) }} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>




  </>
}

export default App
