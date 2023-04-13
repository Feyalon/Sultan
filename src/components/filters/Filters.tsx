import {Ifilter} from '../../models'
import "./filters.css"
interface filter{
    filter: Ifilter
}
export function Filters(props: filter){
    
    
    return(
       
        <div>
            
            <div className="filters">
                
                <div className="list">
                    <h1>{props.filter.name}</h1>
                    <ul>
                        {props.filter.list.map((name, i) => (
                            <li key={i}>
                                {name}
                            </li>
                        ))}
                    </ul>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    )
}
