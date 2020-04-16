import { RoomService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from 'app/BackendAPI';
import { Room } from 'fashionkilla-interfaces';

class RoomServiceImplementation implements RoomService {
  async getAll() {
    const rooms: AxiosResponse<Room[]> = await backendAPI.get('rooms');
    return rooms.data;
  }

  async getMostPopular() {
    const mostPopularRooms: AxiosResponse<Room[]> = await backendAPI.get('rooms/most_popular');
    return mostPopularRooms.data;
  }

  async getByID(roomID: number): Promise<Room> {
    const room: AxiosResponse<Room> = await backendAPI.get(`rooms/${roomID}`);
    return room.data;
  }
}

export const roomService: RoomService = new RoomServiceImplementation();