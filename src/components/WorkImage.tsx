import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    // Only run if video exists
    if (props.video) {
      try {
        const response = await fetch(`/videos/${props.video}`);
        if (!response.ok) return; // <-- prevents crash if file doesn't exist

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        setVideo(blobUrl);
        setIsVideo(true);
      } catch {
        // silently fail → no video shown
      }
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img src={props.image} alt={props.alt || "Project preview"} />

        {isVideo && (
          <video src={video} autoPlay muted playsInline loop />
        )}
      </a>
    </div>
  );
};

export default WorkImage;