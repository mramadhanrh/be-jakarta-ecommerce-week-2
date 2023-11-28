import express from "express";
import { users } from "../constants/users.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getMyProfile = (request, response) => {
  response.json({
    profile_picture: "https://source.unsplash.com/random/250x250?Person",
    name: "Ramadhan Rahmat",
    email: "rama@gmail.com",
    location: "Bandung, West Java",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getProfileById = (request, response) => {
  // Query Parameter
  const userId = request.query.userId;
  const userData = userss[userId];

  if (!userData) {
    response.status(404).json({
      message: "Data not found",
    });
    return;
  }

  response.json({
    users: users[userId],
  });
};
