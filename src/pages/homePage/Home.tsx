import Card from '../../components/card/Card'
import { Categories } from './../../components/categories/Categories';
import {useState, useEffect} from 'react';
import "./home.css";
import { Filters } from './../../components/filters/Filters';
import { Sorted } from './../../components/sorted/Sorted';
import { Root } from './../../components/root/Root';
import { filterList } from './../../data/filterlist';
import axios from 'axios'
import { Parameters } from './../../components/parameters/Parameters';

export function Home(){
    const [items, setitems] = useState([]);
    const [filters, setfilters] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0)
    const [orderType, setOrderType] = useState(0)
    const [editType, setEditType] = useState(false)
    const [paginationType, setPagination] = useState(1)
    const [paginationBool, setPaginationBool] = useState(true)
    const [parametersValue, setParametersValue] = useState("")    
    const [downParametersValue, setDownParametersValue] = useState("")
    const [open, setOpen] = useState(false)
    let backUp: any[] = []
    const pagination = [1,2,3,4,5,6,7,8]

    useEffect(() => {
        if(categoryId === 0){
            fetch(`http://localhost:4000/products/?_sort=${sortType > 0 ? 'price': 'name'}&_order=${orderType > 0 ? 'desc': 'asc'}&_page=${paginationType}&_limit=6&${parametersValue}&${downParametersValue}`)
                .then((response) =>  response.json())
                .then((json) => {
                    setitems(json)
                    setPaginationBool(true)
                });
        }else{
            fetch("http://localhost:4000/products/?category=" + categoryId + `&_sort=${sortType > 0 ? 'price': 'name'}&_order=${orderType > 0 ? 'desc': 'asc'}&${parametersValue}&${downParametersValue}`)
                .then((response) =>  response.json())
                .then((json) => {
                    setitems(json)
                    setPaginationBool(false)
                });
        }


    }, [categoryId, sortType, orderType, paginationType, parametersValue, downParametersValue])
    let limit = 24 / 3
    useEffect(() => {
        if(backUp.length === 0){
            localStorage.setItem('items', JSON.stringify(items))
        }else{
            localStorage.setItem('items', JSON.stringify(backUp))
        }
        
    }, [backUp])
    const data_map = JSON.parse(localStorage.getItem('items') || '{}')
    console.log(data_map.length)

    const remove = (id: any) => {
        axios.delete(`http://localhost:4000/products/${id}`).then(response => console.log(response)).catch((e) => console.log(e))
    }
    function previousPage(): void {
        if(paginationType === 0){
            setPagination(1)
        }else{
            setPagination(paginationType - 1)
        }
    }

    function nextPage(): void {
        if(paginationType === 4){
            setPagination(1)
        }else{
            setPagination(paginationType + 1)
        }
    }
    return(
        <div className="content" data-testid="PostContent">
            <div className="mobile-header">
                
                <div className="mobile-header-down-content">
                    <div className="mobile-header-top-content" onClick={() => setOpen(!open)}>
                        <h2>
                            Подбор по параметрам
                        </h2>
                        <span className="openParameters">
                            {!open &&
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#3F4E65"/>
                            </svg>
                            }
                            {open &&
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L5 1L1 5" stroke="#3F4E65"/>
                                </svg>
                                
                            }
                        </span>
                    </div>
                    {open && <Parameters value={parametersValue} onChangeValue={(i) =>setParametersValue(i)} onDownChangeValue={(e) => setDownParametersValue(e)} />}
                    <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                    <Sorted value={sortType} onChangeSort={(i) => setSortType(i)} onChangeOrder={(i) => setOrderType(i)} />
                </div>
            </div>

            <div className="content-headers">
                <div className="header-content">
                    <Root />
                    <Sorted value={sortType} onChangeSort={(i) => setSortType(i)} onChangeOrder={(i) => setOrderType(i)} />
                </div>
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
            </div>
            
            <div className="content-main">
                
                <div className="filters">
                    <h2>
                        Подбор по параметрам
                    </h2>
                   
                    <Parameters value={parametersValue} onChangeValue={(i) =>setParametersValue(i)} onDownChangeValue={(e) => setDownParametersValue(e)} />
                    {filterList.map(filter => <Filters filter={filter}/>)}
                </div>
                
                <div className="Card-menu">
                    
                    <div className="Card-menu-content" data-testid="cards">
                        {items.map(product => <Card product={product} onDeleteClick={(i) => remove(i)} />)}
                    </div>
                    {paginationBool &&
                    <div className="pagination">
                        <button onClick={previousPage}>
                            Предыдущий
                        </button>
                        <p>
                            {paginationType === 0? paginationType + 1 : paginationType}
                        </p>
                        <button onClick={nextPage}>
                            Следующий 
                        </button>
                        
                    </div>
                 }
                </div>
                
            </div>
            
        </div>
    )   
}