import React from "react";
import PortofolioCard from "./PortofolioCard";

class PortofolioList extends React.Component {
  state = {
    Portofoliolists: [],
  };
  componentDidMount = () => {
    fetch("http://demo8663742.mockable.io/portolist")
      .then((response) => response.json())
      .then(({ portolist }) => this.setState({ Portofoliolists: portolist }))
      .catch((err) => console.log(err));
  };
  componentDidUpdate = () => {
    console.log("update");
  };
  render() {
    return (
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            {this.state.Portofoliolists.map((portoItem) => {
              return (
                <PortofolioCard key={portoItem.id} portofolio={portoItem} />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default PortofolioList;
