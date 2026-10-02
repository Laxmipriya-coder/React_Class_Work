import './Home.css'
import stylpage from './homepage.module.css'
function Home(){
    return (
        <>
        <h2 className='bg-yellow'>Home Component</h2>
        <h2 className={stylpage.bgBlue}>Hii EveryOne</h2>
        </>
    )
}
export default Home;