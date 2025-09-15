// Homepage: Intro + simple profile photo upload preview.
import ProfilePhotoUpload from "@/components/ProfilePhotoUpload";

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to Shrysapp</h1>
      <p>Hi, I’m Shreyas. This is a simple, clean portfolio with an intro, profile photo upload preview, and projects.</p>
      <div style={{ marginTop: "1rem" }}>
        <ProfilePhotoUpload />
      </div>
    </section>
  );
}
