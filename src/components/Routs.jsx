import { MainLAyout } from "../layout/MainLAyout"
import { Products } from "./Products"


export const Routs = () => {
  return (
    <div className="container">
        <div className="wrappers">
        <MainLAyout/>
        <Products/>
    </div>
    </div>
  )
}
