using IselTech17Event.DTOs;
using System.Threading.Tasks;

namespace IselTech17Event.Services.Interfaces
{
    public interface ITracksService
    {
        Task<TrackDto> GetAllAsync();
        Task<TrackDto> GetAsync(int id);
        Task MarkTrackToWatch(int id);
    }
}