function home_id({ params }:any) {
    return (
      <div>
        <h2>Bienvenido {params.id}!</h2>
      </div>
    );
  }
  
  export default home_id;  