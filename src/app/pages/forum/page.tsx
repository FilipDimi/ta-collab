import Sidebar from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

const dummyData = [
  {
    id: "1",
    user: "Filip D.",
    title: "Rust compilateion is slow",
    timestamp: "2 days ago",
    comments: "10",
  },
  {
    id: "2",
    user: "Mateja M.",
    title: "This is why PyTorch is better than TensorFlow",
    timestamp: "12 days ago",
    comments: "3",
  },
  {
    id: "3",
    user: "Martin D.",
    title: "C++ pointers",
    timestamp: "1 days ago",
    comments: "7",
  },
  {
    id: "4",
    user: "Merrick P.",
    title: "I hate Python and heres why",
    timestamp: "1 days ago",
    comments: "101",
  },
  {
    id: "5",
    user: "Elena D.",
    title: "Is programming worth it?",
    timestamp: "2 days ago",
    comments: "10",
  },
];

interface DynamicTableRow {
  id: string;
  user: string;
  title: string;
  timestamp: string;
  comments: string;
}

const DynamicTableRow: React.FC<DynamicTableRow> = ({
  id,
  user,
  title,
  timestamp,
  comments,
}) => {
  return (
    <TableRow id={id}>
      <TableCell className="font-medium">{user}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{timestamp}</TableCell>
      <TableCell className="text-right">{comments}</TableCell>
    </TableRow>
  );
};

const page = () => {
  return (
    <>
      <Sidebar />
      <Table className="">
        <TableCaption>A list of recent posts</TableCaption>
        <TableHeader>
          <DynamicTableRow
            id="id"
            user="User"
            title="Title"
            timestamp="Timestamp"
            comments="Comments"
          />
        </TableHeader>
        <TableBody>
          {dummyData.map((post) => (
            <DynamicTableRow
              id={post.id}
              user={post.user}
              title={post.title}
              timestamp={post.timestamp}
              comments={post.comments}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default page;
