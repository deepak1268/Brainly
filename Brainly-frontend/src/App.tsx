import "./App.css";
import { Button } from "./components/button";
import { SideBar } from "./components/sidebar";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Card } from "./components/card";
import { DocumentIcon } from "./icons/DocumentIcon";

function App() {

  return (
    <div className="flex h-screen">

      <SideBar />
      
      <div className="bg-gray-100 flex-grow px-10 py-8">

        {/* top header  */}
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">
            All Notes
          </div>

          <div className="flex gap-2">
            <Button
              variant="primary"
              text="Share Brain"
              onClick={() => {}}
              startIcon={<ShareIcon/>}
            />
            <Button
              variant="secondary"
              text="Add Content"
              onClick={() => {}}
              startIcon={<PlusIcon/>}
            />
          </div>
        </div>

        {/* content */}
        <div className="mt-20">
          <Card title="Project Ideas" startingIcon={<DocumentIcon/>}></Card>
        </div>

      </div>

    </div>
  
  );
}

export default App;
