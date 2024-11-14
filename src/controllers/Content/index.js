import { ContentRepository } from "../../repositories/ContentRepository";
import { ContentController } from "./ContentController";
import { ContentService } from "../../services/ContentService";

const contentRepository = ContentRepository.getInstance();
const contentService = new ContentService(contentRepository);
const contentController = new ContentController(contentService);


export { contentController };