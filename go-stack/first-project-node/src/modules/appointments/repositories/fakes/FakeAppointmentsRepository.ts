import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/CreateAppointmentDTO';
import Appointment from '@modules/appointments/entities/Appointment';
import { v4 } from 'uuid';
import { isEqual } from 'date-fns';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find((appointment) =>
      isEqual(appointment.date, date)
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: v4(), provider_id, date });

    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
