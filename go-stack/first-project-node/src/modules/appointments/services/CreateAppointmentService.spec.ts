import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository
    );
    const provider_id = '1234';

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id,
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe(provider_id);
  });

  it('should not be able to create two appointments on the same date', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository
    );
    const provider_id = '1234';
    const date = new Date();

    await createAppointmentService.execute({
      date,
      provider_id,
    });

    expect(
      createAppointmentService.execute({
        date,
        provider_id,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
