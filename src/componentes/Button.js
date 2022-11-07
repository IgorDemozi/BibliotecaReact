import React from 'react'

const Button = ({ children, className }) => {

   // var [num, setNum] = React.useState(0);

   // React.useEffect(() => {
   //    alert(num)
   // }, [num])

   return (
      // <button onClick={() => setNum(num + 1)}>{children} com número</button>
      <button className={className}>{children}</button>
   )
}

export default Button