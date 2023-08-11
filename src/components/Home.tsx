import '../scss/Home.scss'

export const Home = () => {
  return (
    <div id="component-home">
      <div className="content">
        <h1>Home</h1>
        <div className="align-center">
          <button className="cta">I need a problem solved.</button>
          <button className="cta">I want to be paid to solve a problem.</button>
        </div>
      </div>
    </div>
  )
}