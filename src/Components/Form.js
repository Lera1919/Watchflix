
export default function Form(props) {

    const {children, buttonText} = props

    const handlerSubmit = () => {
        alert('Форма отправлена')
    }

    return (
        <form className="grid gap-4 text-black" onSubmit={handlerSubmit}>
           {children}

           <button type="submit" className="bg-yellow-300 rounded-md text-black p-4">{buttonText}</button>
            
        </form>
        
    )
}