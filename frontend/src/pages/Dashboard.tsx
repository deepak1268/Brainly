import { Button } from "../components/button";
import { SideBar } from "../components/sidebar";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/card";
import { CreateContentModal } from "../components/createContentModal";
import { useState } from "react";

export const Dashboard = () => {
  const [modalOpen,setModalOpen] = useState(false);
  const tags = ["#productivity","#growth"];
  
  return (
    <div className="flex h-screen">

      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>

      <SideBar />
      
      <div className="bg-gray-100 flex-grow px-10 py-8 ml-70">

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
              onClick={() => (setModalOpen(true))}
              startIcon={<PlusIcon/>}
            />
          </div>
        </div>

        {/* content */}
        <div className="grid grid-cols-3 gap-4 mt-20">
          <Card title="Project Ideas" type="tweet" tags={tags} link="https://x.com/piyushgarg_dev/status/1978748632653312193"/>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
          <Card title="First Video" type="video" tags={tags} link="https://www.youtube.com/watch?v=So7lVjQl0wI"></Card>
        </div>

      </div>

    </div>
  
  );
}

