import "./sorted.css"
import React,{ useState } from 'react';

type sortProps = {
    value: number,
    onChangeSort: (idx: number) => void,
    onChangeOrder: (idx: number) => void
}
export const Sorted: React.FC<sortProps> = React.memo(({value, onChangeSort, onChangeOrder}) => {
    const [open, setOpen] = useState(false)
    const sort_content = [
        
        {
            name: "название",
            sort: "name"
        },
        {
            name: "цена",
            sort: "price"
        }
    ]
    const sort_category = [
        {
            name: "возрастание",
        },
        {
            name: "убывание",
        }
    ]
    const sortName = sort_content[value].name
    function OnSort(i: any){
        setOpen(false);
        onChangeSort(i)
    }
    function OnOrder(i: any){
        setOpen(false)
        onChangeOrder(i)
    }
    return (
        <div className="sort">
            <div className="sort-label">

                <b>Сортировка:</b>
                <span onClick={() => setOpen(!open)}> {sortName}</span>
            </div>
                {open && (
                    <div className="sort-popup">
                        <ul>
                            {sort_content.map((obj, i) => (
                                <li onClick={() => OnSort(i)} className={value === i ? 'sortActive': ''}>
                                    {obj.name}
                                </li>
                            ))}
                            {sort_category.map((obj, i) => (
                                <li onClick={() => OnOrder(i)}>
                                    {obj.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    )
})