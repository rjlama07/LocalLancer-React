import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import "./Messages.scss";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id) => newRequest.put(`/conversations/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["conversations"]),
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "An error occurred while fetching messages."
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((conversation) => {
                const isUnread =
                  (currentUser.isSeller && !conversation.readBySeller) ||
                  (!currentUser.isSeller && !conversation.readByBuyer);
                return (
                  <tr
                    className={isUnread ? "active" : ""}
                    key={conversation.id}
                  >
                    <td>{currentUser.isSeller ? conversation.buyerId : conversation.sellerId}</td>
                    <td>
                      <Link to={`/message/${conversation.id}`} className="link">
                        {conversation?.lastMessage?.substring(0, 100)}...
                      </Link>
                    </td>
                    <td>{moment(conversation.updatedAt).fromNow()}</td>
                    <td>
                      {isUnread && (
                        <button onClick={() => handleRead(conversation.id)}>
                          Mark as Read
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
