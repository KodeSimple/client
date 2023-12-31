import React, { useEffect } from 'react';
import PosNavBarComp from '../../component/header/PosNavBarComp';
import PosFooter from '../../component/footer/PosFooter';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../component/userReducer';
import SalesListTable from '../../component/salesListTable/salesListTable';
import '../sales/PosSales.css';

function PosSales() {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(loggedInUser);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    const expirationTime = localStorage.getItem('loggedInUserExpiration');

    if (storedUser && expirationTime && Date.now() < parseInt(expirationTime, 10)) {
      dispatch(setLoggedInUser(storedUser));
    } else {
      localStorage.removeItem('loggedInUser');
      localStorage.removeItem('loggedInUserExpiration');
      navigate('/home');
    }
  }, [dispatch, navigate]);

  return (
    <>
      <div>
        <div>
          <PosNavBarComp />
        </div>
        <main className="posSalesMain">
            <div className="p-3 d-flex justify-content-center align-content-center">
              <h1>Sales History</h1>
            </div>
            <div>
              <SalesListTable />
            </div>
        </main>
        <div>
          <PosFooter />
        </div>
      </div>
    </>
  );
}

export default PosSales;

