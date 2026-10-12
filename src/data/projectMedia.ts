import type { ProjectMedia } from "../types/portfolio";

function screenshot(project: string, file: string, caption: string): ProjectMedia {
  return {
    src: `/projects/${project}/${file}`,
    alt: `${caption} in ${project.replaceAll("-", " ")}`,
    caption,
  };
}

export const projectMedia = {
  forge: [
    screenshot("forge", "forge-new.png", "Project creation with forge new"),
    screenshot("forge", "forge-add.png", "Feature installation with forge add"),
    screenshot("forge", "forge-doctor.png", "Diagnostics with forge doctor"),
  ],
  "hospital-outpatient-system": [
    screenshot("hospital-outpatient-system", "hos-home.png", "Home dashboard"),
    screenshot("hospital-outpatient-system", "hos-find.png", "Find a doctor"),
    screenshot("hospital-outpatient-system", "hos-booking.png", "Appointment booking"),
    screenshot("hospital-outpatient-system", "hos-manage-appointments.png", "Appointment management"),
    screenshot("hospital-outpatient-system", "hos-doctors-feature.png", "Doctor features"),
  ],
  medora: [
    screenshot("medora", "medora-home.png", "Home screen"),
    screenshot("medora", "medora-auth.png", "Authentication screen"),
    screenshot("medora", "medora-results.png", "Lab results"),
    screenshot("medora", "medora-ai.png", "AI-assisted explanations"),
  ],
  waylo: [
    screenshot("waylo", "waylo-onboard.png", "Onboarding"),
    screenshot("waylo", "waylo-home.png", "Home screen"),
    screenshot("waylo", "waylo-explore.png", "Explore places"),
    screenshot("waylo", "waylo-place.png", "Place listing"),
    screenshot("waylo", "waylo-place-detail.png", "Place details"),
    screenshot("waylo", "waylo-create.png", "Create a recommendation"),
    screenshot("waylo", "waylo-contribute.png", "Contribute a place"),
    screenshot("waylo", "waylo-complete.png", "Completed contribution"),
    screenshot("waylo", "waylo-activity.png", "Activity screen"),
    screenshot("waylo", "waylo-profile.png", "Profile screen"),
  ],
  tagpo: [
    screenshot("tagpo", "tagpo-home.png", "Home screen"),
    screenshot("tagpo", "tagpo-capture.png", "Photo capture"),
    screenshot("tagpo", "tagpo-edit.png", "Photo editing"),
    screenshot("tagpo", "tagpo-upload.png", "Photo upload"),
    screenshot("tagpo", "tagpo-moments.png", "Shared moments"),
    screenshot("tagpo", "tagpo-activity.png", "Activity screen"),
    screenshot("tagpo", "tagpo-profile.png", "Profile screen"),
  ],
  cookpal: [
    screenshot("cookpal", "cookpal-home-page.png", "Recipe home page"),
    screenshot("cookpal", "cookpal-details.png", "Recipe details"),
    screenshot("cookpal", "cookpal-start.png", "Cooking mode start"),
    screenshot("cookpal", "cookpal-done.png", "Cooking completion"),
    screenshot("cookpal", "cookpal-ratings.png", "Recipe ratings"),
    screenshot("cookpal", "cookpal-watermark.png", "CookPal visual"),
  ],
  "file-sharing-server": [
    screenshot("file-sharing-server", "test-run.png", "File sharing interface"),
  ],
  "smart-outfit-organizer": [
    screenshot("smart-outfit-organizer", "soo-pages.png", "Wardrobe pages"),
    screenshot("smart-outfit-organizer", "soo-try.png", "Outfit try-on concept"),
  ],
  wd40: [
    screenshot("wd40", "live-website.png", "WD-40 live website snapshot"),
  ],
  fieldpulse: [
    {
      src: "/projects/fieldpulse/fieldpulse-navbar.mp4",
      alt: "FieldPulse navbar interaction demonstration",
      caption: "Navbar behavior and interaction demo",
      kind: "video",
    },
  ],
  "alt-tutor": [
    screenshot("alt-tutor", "alts-home.png", "Home page prototype"),
    screenshot("alt-tutor", "alts-auth.png", "Authentication prototype"),
    screenshot("alt-tutor", "alts-booking.png", "Booking prototype"),
    screenshot("alt-tutor", "alts-pending.png", "Pending requests prototype"),
    screenshot("alt-tutor", "alts-transactions.png", "Transactions prototype"),
    screenshot("alt-tutor", "alts-components.png", "Component designs"),
  ],
} satisfies Record<string, ProjectMedia[]>;
