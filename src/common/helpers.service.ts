import { format } from "date-fns";
import { computed } from "vue";

const width = computed(() => window.innerWidth);

export function modalSize(defaulSize: number) {
  if (width.value < defaulSize) {
    return "100%";
  } else {
    return `${defaulSize}px`;
  }
}

export function getNow(formatDate = "MMM dd, yyyy hh:mm a"): string {
  return format(new Date(), formatDate);
}

export function formatDate(
  date: string | number,
  formatDate = "MMM dd, yyyy hh:mm a"
): string {
  if (date) {
    return format(new Date(date), formatDate);
  }
  return "";
}
