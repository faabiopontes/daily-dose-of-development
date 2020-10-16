import ICreateAppointmentDTO from '../dtos/CreateAppointmentDTO';
import Appointment from '../entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
