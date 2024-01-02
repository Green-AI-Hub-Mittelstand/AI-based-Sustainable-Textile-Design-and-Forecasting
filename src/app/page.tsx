import "bulma/css/bulma.min.css";
import "bulma-slider/dist/css/bulma-slider.min.css";

export default function Home() {
  return (
    <div className="container is-fluid mt-3">
      <div className="tile is-ancestor mb-6">
        <div className="tile is-parent is-vertical is-7">
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth">
                  <select>
                    <option>T-Shirt</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-ancestor mb-6">
        <div className="tile is-parent is-vertical is-7">
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth mb-6">
                  <select>
                    <option>Recyclingfähigkeit</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="column">
                <input
                  className="slider is-fullwidth has-output-tooltip"
                  type="range"
                  defaultValue="5"
                  min="1"
                  max="5"
                />
              </div>
            </div>
          </div>
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth mb-6">
                  <select>
                    <option>Strapazierfähigkeit</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="column">
                <input
                  className="slider is-fullwidth has-output-tooltip"
                  type="range"
                  defaultValue="3"
                  min="1"
                  max="5"
                />
              </div>
            </div>
          </div>
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth mb-6">
                  <select>
                    <option>Festigkeit</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="column">
                <input
                  className="slider is-fullwidth has-output-tooltip"
                  type="range"
                  defaultValue="5"
                  min="1"
                  max="5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-parent is-5">
          <div className="tile is-child card has-background-grey has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 ml-6 mr-6">
                {"Vorgeschlagenes Material:\n 99% Polyester 1% Elastane"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent mr-6">
          <div className="tile is-child card has-background-success has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 ml-6 mr-6">
                {"Kann bis zu 25-30% aus recyceltem Fasern hergestellt werden"}
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent mr-6">
          <div className="tile is-child card has-background-danger has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 mr-6 ml-6">
                {"Verursacht Mikroplastik und ist nicht biologisch abbaubar."}
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child card has-background-warning-dark has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 ml-6 mr-6">
                {
                  "Wird beim Recycling zuerst zerkleinert und zu Plastikgranulat verarbeitet."
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
