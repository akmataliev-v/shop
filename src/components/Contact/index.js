import "./style.css"

const contact = [
    {
       id: 1,
       title: "Кыргызстан Бишкек",
       description: "Бишкек – столица Кыргызстана и самый большой город страны по количеству жителей (больше 1 миллиона). Бишкек расположен в центре Чуйской долины у подножия одного из горных хребтов Тянь-Шаня – Кыргызского Ала-Тоо. Его длина составляет 375 километров и простирается от Боомского ущелья до Таласской области. Самой высокой точкой хребта (4875 метров) является пик Семёнова-Тян-Шанского.",
       thumbnail: "https://img.geliophoto.com/bishkek/08_bishkek.jpg",

    },
];

function Contact() {

    
    return (
        <div className="contact1">
        <h1 className="h11">Welcome to Bishkek!</h1>
            <div className="contact1"> 
            {contact.map((item) => (
                <div className="contact-item">
                    <img className="contact-image"src={item.thumbnail} alt={item.title}/>
                    <div className="contact-details">
                        <h3 className="contact-title">{item.title}</h3>
                        <p className="contact-description">{item.description}</p>
                        <div className="contact-info">
                        <div className="contact-brand">{item.brand}</div>
                        <div className="contact-category">{item.category}</div>
                        </div>
                        <div className="contact-price">{item.price}</div>
                    </div>
                </div>
                
            ))};
            </div> 
         </div>
         
    )
}

export default Contact;




