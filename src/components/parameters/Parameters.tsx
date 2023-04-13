import "./parameters.css"
import React, {useState, FC} from 'react';
type ParametersProps = {
    value: string,
    onChangeValue: (classNamex: string) => void
    onDownChangeValue: (classNamex:string) => void
}

export const Parameters:FC<ParametersProps> = React.memo(({value, onChangeValue, onDownChangeValue}) => {
    function onChangeInputValue(e: any) {
        if(e.target.value === ""){
            onChangeValue("")
        }else{
            onChangeValue(`${e.target.name}_like=${e.target.value}`)
        }
    }
    function onSliceTopInputValue(e: any) {
        if(e.target.value === ""){
            onChangeValue("")
        }else{
            onChangeValue(`${e.target.name}_gte=${e.target.value}`)
        }
    }
    function onSliceDownInputValue(e: any){
        if(e.target.value === ""){
            onDownChangeValue("")
        }else{
            onDownChangeValue(`${e.target.name}_lte=${e.target.value}`)
        }
    }
    return(
        <>
            <div className="Parameters">
                <div className="Parameters-content">
                    <br />
                    <div className="Parameters-price">
                        <p>
                            Цена ₸
                        </p>
                        <div className="Parameters-col">
                            <input type="text" onChange={(e) => onSliceTopInputValue(e)} name="price"/>

                            <input type="text" className="Parameter-col-1" onChange={(e) => onSliceDownInputValue(e)} name="price"/>
                        </div>
                    </div>
                    <br />
                    <div className="Parameters-producedby">
                        <p>
                            Производитель
                        </p>
                        <label className="searcher">
                            <input id="searcher_field" type="text" placeholder="Поиск" name="producedby" onChange={(e) => onChangeInputValue(e)} />
                            <button className="button_search">
                                <span className="material-symbols-outlined">
                                        search
                                </span>
                            </button>
                        </label>
                        <br />
                        <div className="checkbox-group">
                            <div>
                                
                                <input type="checkbox" name="producedby" className="checkbox" value="Aravia Professional" onClick={(e) => onChangeInputValue(e)} />
                                <span>Aravia Professional</span>
                            </div>
                            <div>
                                <input type="checkbox" name="producedby" className="checkbox" value="Aravia" onClick={(e) => onChangeInputValue(e)} />
                                <span>Aravia</span>
                            </div>
                            <div>
                                <input type="checkbox" name="producedby" className="checkbox" value="Milv" onClick={(e) => onChangeInputValue(e)}/>
                                <span>Milv</span>
                            </div>
                            <div>
                            
                            <input type="checkbox" name="producedby" className="checkbox" value="In'Garden" onClick={(e) => onChangeInputValue(e)}/>
                            <span>In'Garden</span>
                            </div>
                            <div>
                                <input type="checkbox" name="producedby" className="checkbox" value="CeraVe" onClick={(e) => onChangeInputValue(e)}/>
                                <span>CeraVe</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="Parameters-brand">
                        <p>Бренд</p>
                        <label className="searcher">
                            <input id="searcher_field" type="text" placeholder="Поиск" name="brand" onChange={(e) => onChangeInputValue(e)} />
                            <button className="button_search">
                                <span className="material-symbols-outlined">
                                        search
                                </span>
                            </button>
                            
                        </label>
                        <br />
                        <div className="checkbox-group">
                            <div>
                                
                                <input type="checkbox" name="brand" className="checkbox" value="Aravia Professional" onClick={(e) => onChangeInputValue(e)} />
                                <span>Aravia Professional</span>
                            </div>
                            <div>
                                <input type="checkbox" name="brand" className="checkbox" value="Aravia" onClick={(e) => onChangeInputValue(e)} />
                                <span>Aravia</span>
                            </div>
                            <div>
                                <input type="checkbox" name="brand" className="checkbox" value="Milv" onClick={(e) => onChangeInputValue(e)}/>
                                <span>Milv</span>
                            </div>
                            <div>
                            
                            <input type="checkbox" name="brand" className="checkbox" value="In'Garden" onClick={(e) => onChangeInputValue(e)}/>
                            <span>In'Garden</span>
                            </div>
                            <div>
                                <input type="checkbox" name="brand" className="checkbox" value="CeraVe" onClick={(e) => onChangeInputValue(e)}/>
                                <span>CeraVe</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            
        </>
    )
})
