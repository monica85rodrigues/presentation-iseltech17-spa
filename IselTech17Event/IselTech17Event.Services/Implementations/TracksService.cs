namespace IselTech17Event.Services.Implementations
{
    using IselTech17Event.Services.Interfaces;
    using System;
    using IselTech17Event.DTOs;
    using System.Threading.Tasks;

    public class TracksService : ITracksService
    {
        public Task<TrackDto> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<TrackDto> GetAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task MarkTrackToWatch(int id)
        {
            throw new NotImplementedException();
        }
    }
}
