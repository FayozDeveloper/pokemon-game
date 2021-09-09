import s from './layout.module.css'
const Layout = (props) =>{
    const background = {
        backgroundImage: `url(${props.urlBg})`,
        backgroundImage2: `url(${props.urlBg})`,
        backgroundColor: `${props.colorBg}`
    }
    return(
        <section className={s.root} style={background}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;