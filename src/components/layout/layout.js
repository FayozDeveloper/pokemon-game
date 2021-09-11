import s from './layout.module.css'
const Layout = (props) =>{

   const background = {
       backgroundImage: `url(${props.urlBg})`,
       backgroundImage2: `url(${props.urlBg})`,
       backgroundColor: `${props.colorBg}`
   }

    return(
        <section className={s.root} id={props.id} style={background}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3 style={{color:'white'}}>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{props.children}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;