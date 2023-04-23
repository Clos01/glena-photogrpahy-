import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function ChooseMe() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center">
            {/* CARD 1 */}
          <div className="w-full md:w-1/3 p-3">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full flex flex-col justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h2 className="text-xl font-bold mt-4">High Quality Images</h2>
              <p className="text-gray-700 mt-2">Card 1 content goes here.</p>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="w-full md:w-1/3 p-3">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full flex flex-col justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h2 className="text-xl font-bold mt-4">Abundant Experience</h2>
              <p className="text-gray-700 mt-2">Card 2 content goes here.</p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="w-full md:w-1/3 p-3">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden h-full flex flex-col justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h2 className="text-xl font-bold mt-4">Modern Equipment</h2>
              <p className="text-gray-700 mt-2">Card 3 content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseMe;
