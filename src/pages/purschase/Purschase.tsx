import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./purschase.css";
import React, {useState} from 'react'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
  };
export function Purschase(){
    const dispatch = useDispatch()
    const cart = useTypedSelector(state => state.cart)
    console.log(useTypedSelector(state => state.cart))
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [total, setTotal] = useState({
        price: useTypedSelector(state => state.cart.reduce((prev, curr) => {return +curr.price + +prev}, 0)) //return Number(prev + curr.price) }, 0)),
    })
    return(
        <div className="purschase">
            <div className="purschase-root">
                <p>
                    Главная | Корзина | Оформление заказа
                </p>
            </div>
            <h1 className="header-name">
                ОФОРМЛЕНИЕ ЗАКАЗА
            </h1>
            <div className="purschase-content">
                <div className="contact-form">
                    <div className="contact-form-header">
                        <span>
                            1
                        </span>
                        <h1>
                            Контактная форма
                        </h1>
                    </div>
                    <p>
                        Имя
                    </p>
                    <input type="text" />
                    <p>
                        Телефон
                    </p>
                    <input type="text" />
                    <p>
                        E-mail
                    </p>
                    <input type="text" />
                    <p>
                        Название организации
                    </p>
                    <input type="text" />


                    <div className="adres">
                        <div className="contact-form-header">
                            <span>
                                2
                            </span>
                            <h1>Адрес доставки</h1>
                        </div>
                        <p>
                            Город
                        </p>
                        <input type="text" />
                        <p>
                            Адрес
                        </p>
                        <input type="text" />
                        
                    </div>
                    <button onClick={handleOpen}>
                            Подтверждение заказа
                    </button>
                </div>
                <div className="Information">
                    <div className='information-content'>
                        <div className="information-header">
                            <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.50517 3.04146L9.48495 1.40923L9.16828 0.769143C8.96109 0.353085 8.45576 0.181271 8.0397 0.388458L2.68652 3.04146H3.50517Z" fill="#3F4E65"/>
                            <path d="M11.3413 1.4563C11.2672 1.4563 11.1931 1.46641 11.1189 1.48662L9.71413 1.87067L5.42383 3.04136H10.2936H12.416L12.1532 2.07786C12.0521 1.70223 11.7119 1.4563 11.3413 1.4563Z" fill="#3F4E65"/>
                            <path d="M13.2937 3.6311H13.1016H12.8405H12.5795H10.5867H3.26446H2.30432H1.49579H1.34587H0.843908C0.577765 3.6311 0.340258 3.75407 0.185289 3.94778C0.114542 4.03706 0.0606401 4.13981 0.03032 4.25266C0.0117911 4.32341 0 4.39753 0 4.47333V4.57439V5.53453V13.8574C0 14.3223 0.377316 14.6996 0.842224 14.6996H13.292C13.7569 14.6996 14.1342 14.3223 14.1342 13.8574V11.5076H9.13644C8.34644 11.5076 7.70466 10.8658 7.70466 10.0758V9.30432V9.04323V8.78214V8.20269C7.70466 7.81527 7.85961 7.46324 8.11061 7.20552C8.33296 6.97642 8.63111 6.82145 8.96463 6.7827C9.02021 6.77598 9.07748 6.7726 9.13476 6.7726H13.4335H13.6946H13.9556H14.1342V4.47333C14.1359 4.00842 13.7586 3.6311 13.2937 3.6311Z" fill="#3F4E65"/>
                            <path d="M14.7252 7.57758C14.6409 7.50009 14.5415 7.44114 14.4304 7.4024C14.3445 7.37378 14.2535 7.35693 14.1575 7.35693H14.1356H14.1188H13.8577H12.9161H9.13617C8.67124 7.35693 8.29395 7.73423 8.29395 8.19916V8.61857V8.87966V9.14075V10.0739C8.29395 10.5388 8.67124 10.9162 9.13617 10.9162H14.1356H14.1575C14.2535 10.9162 14.3445 10.8993 14.4304 10.8707C14.5415 10.8336 14.6409 10.773 14.7252 10.6955C14.8936 10.5422 14.9997 10.3199 14.9997 10.0739V8.19916C14.9997 7.95321 14.8936 7.73085 14.7252 7.57758ZM10.8947 9.30414C10.8947 9.53659 10.7061 9.72525 10.4736 9.72525H10.194C9.96155 9.72525 9.77289 9.53659 9.77289 9.30414V9.02452C9.77289 8.88976 9.83521 8.77015 9.93459 8.69435C10.007 8.63877 10.0963 8.60341 10.194 8.60341H10.2647H10.4736C10.7061 8.60341 10.8947 8.79205 10.8947 9.02452V9.30414Z" fill="#3F4E65"/>
                            </svg>

                            </span>
                            <h2>
                                Оплата
                            </h2>
                        </div>
                        <p>
                            Принимаем оплату наличными, по карте и через расчетный счет.
                        </p>

                    </div>
                    <div className='information-content'> 
                        <div className="information-header">
                            <span>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1191 3.55325C13.593 3.89527 14.1569 4.75713 14.8637 5.94336H12.1191V3.55325ZM3.50552 6.04297C3.79411 6.04297 4.00357 6.18227 4.00357 6.50781C4.00357 6.78239 3.78139 7.00508 3.50695 7.00586H0.498047C0.222954 7.00586 0 7.22894 0 7.50391C0 7.779 0.222954 8.00195 0.498047 8.00195H4.98047C5.25816 8.00195 5.48046 8.22478 5.48046 8.5C5.48046 8.77509 5.25751 8.99805 4.98241 8.99805H0.498047C0.222954 8.99805 0 9.221 0 9.49609C0 9.77119 0.222954 9.99414 0.498047 9.99414H1.59375V11.4883C1.59375 11.7634 1.8167 11.9863 2.0918 11.9863H3.09295C3.27142 12.8654 4.04819 13.5137 4.96387 13.5137C5.87955 13.5137 6.65632 12.8654 6.83479 11.9863H11.8918C12.0702 12.8654 12.847 13.5137 13.7627 13.5137C14.6784 13.5137 15.4551 12.8654 15.6336 11.9863H16.502C16.777 11.9863 17 11.7634 17 11.4883V8.5C17 7.03867 15.4586 6.94166 15.4572 6.93945H11.6211C11.346 6.93945 11.123 6.7165 11.123 6.44141V3.45312H2.0918C1.8167 3.45312 1.59375 3.67608 1.59375 3.95117V5.04688H0.996094C0.721001 5.04688 0.498047 5.26983 0.498047 5.54492C0.498047 5.82001 0.721001 6.04297 0.996094 6.04297H3.50552ZM14.4083 10.9588C14.7649 11.3154 14.7649 11.8937 14.4083 12.2503C13.8348 12.8238 12.8496 12.4158 12.8496 11.6045C12.8496 10.7934 13.8348 10.3853 14.4083 10.9588ZM5.60951 10.9588C5.96606 11.3154 5.96606 11.8937 5.60951 12.2503C5.03598 12.8238 4.05078 12.4158 4.05078 11.6045C4.05078 10.7934 5.03598 10.3853 5.60951 10.9588Z" fill="#3F4E65"/>
                                </svg>
                            </span>
                            <h2>
                                Доставка
                            </h2>
                        </div>
                        <p>
                            Бесплатная доставка от 10 000 ₸
                            по области. Наша доставка работает ежедневно.
                        </p>
                    </div>
                    <div className='information-content'>
                        <div className="information-header">
                            <span>
                                ?
                            </span>
                            <h2>
                                Возникли вопросы
                            </h2>
                        </div>
                        <p>
                            Звоните: +7 777 490 00 91

                        </p>
                        <p>
                            Менеджер Вам ответит на все вопросы.
                        </p>
                    </div>
                    <div className='contact-form-last'>
                        <div className="information-header">
                            <span>
                                3
                            </span>
                            <h2>
                                Дополнительно
                            </h2>
                        </div>
                        <div className="comment">
                            <p>
                                Комментарий
                            </p>
                        </div>
                        <textarea name="comments"></textarea>
                    </div>
                </div>
                <div className="purschases">
                    <div className="purschases-content">
                        {cart.map((item) => (
                            <div className="purschases-content-cards">
                                <img src={item.imagePath} alt="" />
                                <div className="purschases-header">
                                    <p>
                                        {item.size}
                                    </p>
                                    <p>
                                        {item.brand} {item.name}
                                    </p>
                                    <p>
                                        <b>
                                            {item.price} ₸
                                        </b>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="purschases-footer">
                        <div className="purschases-footer-header">
                            <h2>
                                Итого
                            </h2>
                            <p className="total-price">
                                {total.price} ₸
                            </p>
                        </div>
                        <div className="button-form">
                        
                        <button className="purschase-button-click">
                            Редактировать заказ 
                            <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.9">
                            <path d="M12.93 4.60176L10.3976 2.06944C10.3626 2.03442 10.3211 2.00664 10.2754 1.98769C10.2296 1.96874 10.1806 1.95898 10.1311 1.95898C10.0816 1.95898 10.0326 1.96874 9.98682 1.98769C9.94108 2.00664 9.89952 2.03442 9.86452 2.06944L2.93382 9L2.94908 9.01526L2.92514 9.00882L1.97706 12.5469L1.97762 12.547C1.95536 12.6132 1.95197 12.6842 1.96785 12.7522C1.98373 12.8201 2.01824 12.8823 2.0675 12.9318C2.1221 12.9862 2.19213 13.0226 2.26809 13.0359C2.34406 13.0492 2.42227 13.0388 2.49212 13.0061L2.4924 13.0074L5.99618 12.0685L5.99394 12.0603L5.99926 12.0656L12.93 5.13488C12.965 5.09988 12.9928 5.05832 13.0117 5.01258C13.0307 4.96685 13.0404 4.91782 13.0404 4.86832C13.0404 4.81881 13.0307 4.76978 13.0117 4.72405C12.9928 4.67831 12.965 4.63675 12.93 4.60176ZM3.13024 11.8608L3.69332 9.7595L5.23164 11.2978L3.13024 11.8608Z" fill="white"/>
                            </g>
                            </svg>

                            </span>
                        </button>
                        </div>
                        
                        <div className="mobile-button-click">
                            <div className="inforamation-price-footer">
                            <p>
                                {total.price} ₸
                            </p>
                            <button className="editor">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.9">
                                <path d="M12.93 4.60176L10.3976 2.06944C10.3626 2.03442 10.3211 2.00664 10.2754 1.98769C10.2296 1.96874 10.1806 1.95898 10.1311 1.95898C10.0816 1.95898 10.0326 1.96874 9.98682 1.98769C9.94108 2.00664 9.89952 2.03442 9.86452 2.06944L2.93382 9L2.94908 9.01526L2.92514 9.00882L1.97706 12.5469L1.97762 12.547C1.95536 12.6132 1.95197 12.6842 1.96785 12.7522C1.98373 12.8201 2.01824 12.8823 2.0675 12.9318C2.1221 12.9862 2.19213 13.0226 2.26809 13.0359C2.34406 13.0492 2.42227 13.0388 2.49212 13.0061L2.4924 13.0074L5.99618 12.0685L5.99394 12.0603L5.99926 12.0656L12.93 5.13488C12.965 5.09988 12.9928 5.05832 13.0117 5.01258C13.0307 4.96685 13.0404 4.91782 13.0404 4.86832C13.0404 4.81881 13.0307 4.76978 13.0117 4.72405C12.9928 4.67831 12.965 4.63675 12.93 4.60176ZM3.13024 11.8608L3.69332 9.7595L5.23164 11.2978L3.13024 11.8608Z" fill="white"/>
                                </g>
                                </svg>
                            </button>
                            </div>
                            <button className='purschase-mobile-click' onClick={handleOpen} data-testid="buy">
                                Подтверждение заказа
                            </button>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            data-testid="thanks"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        CПАСИБО ЗА ЗАКАЗ!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Наш менеджер свяжется с вами в ближайшее время
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}