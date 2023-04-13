import "./categories.css"
import React from "react";
type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
const categories = ["Все", "Уход за телом", "Уход за руками", "Уход за ногами", "Уход за лицом", "Уход за волосами"];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) =>{
    

    return(     
        <>
            <div className="main-categories">
                <div className="categories-root">
                    <ul>
                        {categories.map((categoryName, i) => (
                            <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
                                {categoryName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </>
    )
})
