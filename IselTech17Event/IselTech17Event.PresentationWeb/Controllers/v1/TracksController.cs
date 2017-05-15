namespace IselTech17Event.PresentationWeb.Controllers.v1
{
    using IselTech17Event.Services.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [Route("api/v1/tracks")]
    public class TracksController : Controller
    {
        public readonly ITracksService tracksService;

        public TracksController(ITracksService tracksService)
        {
            this.tracksService = tracksService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await tracksService.GetAllAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await tracksService.GetAsync(id));
        }
        
        [HttpPut]
        [Route("{id}")]
        public async Task MarkTrackToWatch(int id)
        {
            await tracksService.MarkTrackToWatch(id);
        }
    }
}
