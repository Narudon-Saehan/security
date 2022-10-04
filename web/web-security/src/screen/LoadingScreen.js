const LoadingScreen =()=>{
    return(
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:"center",alignItems:"center"}}>
            <div className="text-center">
                <div className="spinner-border text-primary" style={{width: "20rem",height: "20rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}
export default LoadingScreen;